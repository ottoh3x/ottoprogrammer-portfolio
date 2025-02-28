"use client";

import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { Input } from "@heroui/input";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";

const programs = [
  { value: "International Business", label: "International Business" },
  { value: "Business Management", label: "Business Management" },
  { value: "Dental Hygiene", label: "Dental Hygiene" },
  { value: "Development and Maintenance of Information Systems", label: "Development and Maintenance of Information Systems" },
  { value: "Electronic Engineering and Robotics", label: "Electronic Engineering and Robotics" },
];

// Function to capitalize each word in a string
const capitalizeWords = (str) => {
  if (!str) return "";
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export default function StudentDocumentsGenerator() {
  const [formData, setFormData] = useState({
    // Common fields
    student_name: "",
    passport_number: "",
    nationality: "",
    program_name: "",
    tuition_fee: "",
    
    // Study Agreement specific fields
    id:"",
    address: "",
    phone: "",
    email: "",
    issuingDate: "",
    dateOfBirth: "",
    programNameInLt: "",
    
    // Acceptance Letter specific fields
    month: "",
    day: "",
    date_of_birth: "",
  });

  // Store capitalized name separately to ensure document generation uses the capitalized version
  const [capitalizedName, setCapitalizedName] = useState("");

  useEffect(() => {
    const today = new Date();
    setFormData((prev) => ({
      ...prev,
      month: String(today.getMonth() + 1).padStart(2, "0"),
      day: String(today.getDate()).padStart(2, "0"),
    }));
  }, []);

  // Update capitalized name whenever student_name changes
  useEffect(() => {
    setCapitalizedName(capitalizeWords(formData.student_name));
  }, [formData.student_name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const date = new Date(value);
    
    if (!isNaN(date.getTime())) {
      // Update the specific date field
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      
      // For acceptance letter, we also need the formatted date
      if (name === "dateOfBirth") {
        const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
        setFormData((prevData) => ({
          ...prevData,
          date_of_birth: formattedDate,
        }));
      }
    }
  };

  const handleSelectChange = (value: string) => {
    let tuitionFee = "3200"; // Default tuition fee
    let programNameInLt = ""; // Default empty
  
    // Set tuition fee based on program
    if (value === "Business Management" || value === "International Business") {
      tuitionFee = "2600";
    }
  
    // Set program name in Lithuanian
    switch (value) {
      case "Business Management":
        programNameInLt = "Verslo vadybos";
        break;
      case "International Business":
        programNameInLt = "Tarptautinio verslo";
        break;
      case "Development and Maintenance of Information Systems":
        programNameInLt = "Informacinių sistemų kūrimo ir priežiūros";
        break;
      case "Dental Hygiene":
        programNameInLt = "Burnos higienos";
        break;
      case "Electronic Engineering and Robotics":
        programNameInLt = "Elektronikos inžinerijos ir robotikos";
        break;
      default:
        programNameInLt = value; // Fallback to the original name
    }
  
    setFormData((prevData) => ({
      ...prevData,
      program_name: value,
      programName: value,
      tuition_fee: tuitionFee,
      tuitionFee: tuitionFee,
      programNameInLt: programNameInLt,
    }));
  };

  const generateStudyAgreement = async () => {
    try {
      const response = await fetch("/agreement.docx");

      if (!response.ok) {
        throw new Error("Failed to load the Study Agreement document");
      }

      const blob = await response.blob();
      const reader = new FileReader();

      reader.onload = async (event) => {
        try {
          const content = event.target.result;
          const zip = new PizZip(content);
          const doc = new Docxtemplater(zip);
          const today = new Date();

          // Map form data to agreement template fields
          const agreementData = {
            id: formData.id,
            student_name: capitalizedName, // Use capitalized name
            day: String(today.getDate()).padStart(2, "0"),
            address: formData.address.toUpperCase(),
            phone: formData.phone,
            email: formData.email,
            passportNumber: formData.passport_number,
            issuingDate: formData.issuingDate,
            dateOfBirth: formData.dateOfBirth,
            nationality: formData.nationality,
            programName: formData.program_name,
            programNameInLt: formData.programNameInLt,
            tuitionFee: formData.tuition_fee,
          };

          doc.setData(agreementData);
          doc.render();

          const updatedBlob = doc.getZip().generate({ type: "blob" });
          saveAs(updatedBlob, `${capitalizedName} Study Agreement ${formData.program_name}.docx`);
        } catch (error) {
          console.error("Error processing study agreement:", error);
        }
      };

      reader.readAsArrayBuffer(blob);
    } catch (error) {
      console.error("Error fetching study agreement:", error);
    }
  };

  const generateAcceptanceLetter = async () => {
    try {
      const response = await fetch("/letter.docx");

      if (!response.ok) {
        throw new Error("Failed to load the Acceptance Letter document");
      }

      const blob = await response.blob();
      const reader = new FileReader();

      reader.onload = async (event) => {
        try {
          const content = event.target.result;
          const zip = new PizZip(content);
          const doc = new Docxtemplater(zip);

          // Create a data object specifically for the acceptance letter
          // Important: Make sure all template variables are included here
          const letterData = {
            month: formData.month,
            day: formData.day,
            student_name: capitalizedName, // Use capitalized name
            date_of_birth: formData.date_of_birth,
            passport_number: formData.passport_number,
            program_name: formData.program_name,
            tuition_fee: formData.tuition_fee,
            nationality: formData.nationality,
          };

          doc.setData(letterData);
          doc.render();

          const updatedBlob = doc.getZip().generate({ type: "blob" });
          saveAs(updatedBlob, `${capitalizedName} Acceptance Letter ${formData.program_name}.docx`);
        } catch (error) {
          console.error("Error processing acceptance letter:", error);
        }
      };

      reader.readAsArrayBuffer(blob);
    } catch (error) {
      console.error("Error fetching acceptance letter:", error);
    }
  };

  const generateBothDocuments = () => {
    generateStudyAgreement();
    generateAcceptanceLetter();
  };

  return (
    <form>
      <Card className="max-w-7xl mx-auto">
        <CardHeader className="justify-center">
          <p className="text-default-500">Generate Study Agreement and Acceptance Letter</p>
        </CardHeader>
        
        <CardBody className="gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information */}
            <Input 
              label="Agreement ID" 
              name="id" 
              value={formData.id} 
              onChange={handleChange} 
              isRequired 
            />
            <Input 
              label="Student Name" 
              name="student_name" 
              value={formData.student_name} 
              onChange={handleChange} 
              isRequired 
            />
            <Input
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleDateChange}
              isRequired
            />
            <Input
              label="Nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              isRequired
            />
            <Input
              label="Passport Number"
              name="passport_number"
              value={formData.passport_number}
              onChange={handleChange}
              isRequired
            />
            <Input
              label="Passport Issuing Date"
              name="issuingDate"
              type="date"
              value={formData.issuingDate}
              onChange={handleDateChange}
              isRequired
            />

            {/* Contact Information - Study Agreement specific */}
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+49 123 456 7890"
              value={formData.phone}
              onChange={handleChange}
              isRequired
            />
            <Input 
              label="Email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              isRequired 
            />
            <Input
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              isRequired
            />

            {/* Program and Tuition */}
            <Select
              label="Program"
              placeholder="Select a program"
              selectedKeys={formData.program_name ? [formData.program_name] : []}
              onChange={(e) => handleSelectChange(e.target.value)}
              isRequired
            >
              {programs.map((program) => (
                <SelectItem key={program.value} value={program.value}>
                  {program.label}
                </SelectItem>
              ))}
            </Select>

            <Input
              label="Tuition Fee"
              name="tuition_fee"
              type="number"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">€</span>
                </div>
              }
              value={formData.tuition_fee}
              onChange={handleChange}
              isRequired
              readOnly
            />

            {/* Auto-generated date fields for the acceptance letter */}
            <Input 
              label="Month (Auto)" 
              name="month" 
              value={formData.month} 
              readOnly 
              className="opacity-70"
            />
            <Input 
              label="Day (Auto)" 
              name="day" 
              value={formData.day} 
              readOnly 
              className="opacity-70"
            />
          </div>
        </CardBody>

        <CardFooter className="gap-4 flex-col">
          <Button 
            color="success" 
            variant="bordered" 
            onPress={generateBothDocuments} 
            className="w-full"
          >
            Download Both Documents
          </Button>
          <div className="flex gap-4 w-full">
            <Button 
              color="primary" 
              variant="faded" 
              onPress={generateStudyAgreement} 
              className="w-1/2"
            >
              Download Study Agreement Only
            </Button>
            <Button 
              color="primary" 
              variant="faded" 
              onPress={generateAcceptanceLetter} 
              className="w-1/2"
            >
              Download Acceptance Letter Only
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}