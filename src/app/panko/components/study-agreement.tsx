"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card"
import { Input } from "@heroui/input"
import { Button } from "@heroui/button"
import { Select, SelectItem } from "@heroui/select"
import { saveAs } from "file-saver";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
export default function StudentRegistrationForm() {
    const [formData, setFormData] = useState({
        student_name: "",
        address: "",
        phone: "",
        email: "",
        passportNumber: "",
        issuingDate:"",
        dateOfBirth: "",
        nationality: "",
        programName: "",
        programNameInLt: "", // Add this
        tuitionFee: "",
      });

  const programs = [
    { value: "International Business", label: "International Business" },
    { value: "Business Management", label: "Business Management" },
    { value: "Dental Hygiene", label: "Dental Hygiene" },
    { value: "Development and Maintenance of Information Systems", label: "Development and Maintenance of Information Systems" },
    { value: "Electronic Engineering and Robotics", label: "Electronic Engineering and Robotics" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,

      [name]: value,
    }))
  }

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
      programName: value,
      tuitionFee: tuitionFee,
      programNameInLt: programNameInLt,
    }));
  };
  const generateDocument = async () => {
    try {
      const response = await fetch("/agreement.docx");

      if (!response.ok) {
        throw new Error("Failed to load the Word document");
      }

      const blob = await response.blob();
      const reader = new FileReader();

      reader.onload = async (event) => {
        try {
          const content = event.target.result;
          const zip = new PizZip(content);
          const doc = new Docxtemplater(zip);

          doc.setData(formData);
          doc.render();

          const updatedBlob = doc.getZip().generate({ type: "blob" });
          saveAs(updatedBlob, `${formData?.student_name} Study Agreement ${formData?.programName}.docx`);
        } catch (error) {
          console.error("Error processing document:", error);
        }
      };

      reader.readAsArrayBuffer(blob);
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className=" mx-auto">
        <CardHeader className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-white">Student Study Agreement</h1>
        </CardHeader>

        <CardBody className="gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information */}
            <Input label="Student Name" name="student_name" value={formData.student_name} onChange={handleChange} isRequired />
            <Input
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              isRequired
            />
            <Input
              label="Nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              isRequired
            />

            {/* Contact Information */}
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+49 123 456 7890"
              value={formData.phone}
              onChange={handleChange}
              isRequired
            />
            <Input label="Email"  name="email" type="email" value={formData.email} onChange={handleChange} isRequired />

            {/* Address Information */}
            <Input
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              
              isRequired
            />
           

            {/* Document Information */}
            <Input
              label="Passport Number"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              isRequired
            />
<Input
              label="Issuing date"
              name="issuingDate"
              type="date"
              value={formData.issuingDate}
              onChange={handleChange}
              isRequired
            />
            {/* Program and Tuition */}
            <Select
              label="Program"
              placeholder="Select a program"
              selectedKeys={formData.programName ? [formData.programName] : []}
              onChange={(e) => handleSelectChange(e.target.value)}
              isRequired
            >
              {programs.map((program) => (
                <SelectItem key={program.value} className="text-white" value={program.value}>
                  {program.label}
                </SelectItem>
              ))}
            </Select>

            <Input
              label="Tuition Fee"
              name="tuitionFee"
              type="number"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">€</span>
                </div>
              }
              value={formData.tuitionFee}
              onChange={handleChange}
              isRequired
            />
          </div>
        </CardBody>

        <CardFooter>
        <Button color="success" variant="bordered" onPress={generateDocument} className="w-full">
          Download Study Agreement
        </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

