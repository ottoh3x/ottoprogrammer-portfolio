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

  { value: "Electronic Engineering and Robotics", label: "Electronic Engineering and Robotics" }
];

export default function EditAcceptanceLetter() {
  const [formData, setFormData] = useState({
    month: "",
    day: "",
    student_name: "",
    date_of_birth: "",
    passport_number: "",
    program_name: "Business Management",
    tuition_fee: "",
    nationality: "Moroccan",
  });

  useEffect(() => {
    const today = new Date();
    setFormData((prev) => ({
      ...prev,
      month: String(today.getMonth() + 1).padStart(2, "0"),
      day: String(today.getDate()).padStart(2, "0"),
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,

      [name]: value,
    }))
  }
  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    if (!isNaN(date)) {
      const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
      setFormData({ ...formData, date_of_birth: formattedDate });
    }
  };

  const generateDocument = async () => {
    try {
      const response = await fetch("/letter.docx");

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
          saveAs(updatedBlob, `${formData?.student_name} Acceptance Letter ${formData?.program_name}.docx`);
        } catch (error) {
          console.error("Error processing document:", error);
        }
      };

      reader.readAsArrayBuffer(blob);
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  const handleProgramChange = (e) => {
    setFormData({ ...formData, program_name: e.target.value });
  };
  const handleSelectChange = (value: string) => {
    let tuition_fee = "3200"; // Default tuition fee
    let programNameInLt = ""; // Default empty
  
    // Set tuition fee based on program
    if (value === "Business Management" || value === "International Business") {
      tuition_fee = "2600";
    }
  
    // Set program name in Lithuanian
    
  
    setFormData((prevData) => ({
      ...prevData,
      program_name: value,
      tuition_fee: tuition_fee,
    }));
  };

  return (
    <Card className="max-w-7xl ">
      <CardHeader className="justify-center">
        <h2 className="text-2xl font-bold text-white ">Acceptance Letter</h2>
      </CardHeader>
      <CardBody className="gap-4 grid grid-cols-2">
        <Input label="Month" name="month" value={formData.month} readOnly />
        <Input label="Day" name="day" value={formData.day} readOnly />

        <Input label="Student Name" name="student_name" value={formData.student_name} onChange={handleChange} />
        <Input
          label="Date of Birth"
          name="date_of_birth"
          type="date"
          onChange={handleDateChange}
        />
        <Input
          label="Passport Number"
          name="passport_number"
          value={formData.passport_number}
          onChange={handleChange}
        />
        <Select 
          label="Program Name" 
          name="program_name"
          value={formData.program_name}
          selectedKeys={formData.program_name ? [formData.program_name] : []}

          onChange={(e) => handleSelectChange(e.target.value)}
          className="w-full"
        >
          {programs.map((program) => (
            <SelectItem key={program.value} className="text-white" value={program.label}>
              {program.label}
            </SelectItem>
          ))}
        </Select>
        <Input label="Annual Tuition Fee" startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">€</span>
                </div>
              } name="tuition_fee" value={formData.tuition_fee} onChange={handleChange} />
        <Input label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} />
      </CardBody>
      <CardFooter>
        <Button color="success" variant="bordered" onPress={generateDocument} className="w-full">
          Download Acceptance Letter
        </Button>
      </CardFooter>
    </Card>
  );
}
