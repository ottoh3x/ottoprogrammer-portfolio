// "use client";

// import { useEffect, useState } from "react";
// import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
// import { Button, Chip } from "@nextui-org/react";
// import supabase from "../../../../utils/supabase";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// export default function StudentTable() {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       setLoading(true);
//       const { data, error } = await supabase
//         .from("futureagencystudents")
//         .select("*");

//       if (error) {
//         console.error("Error fetching students:", error);
//       } else {
//         setStudents(data || []);
//       }
//       setLoading(false);
//     };

//     fetchStudents();
//   }, []);
//   const exportToExcel = () => {
//     // Define the worksheet and workbook
//     const worksheet = XLSX.utils.json_to_sheet(students);
  
//     // Define header styles
//     const headerStyle = {
//       font: { bold: true, color: { rgb: "FFFFFF" } }, // White text
//       fill: { fgColor: { rgb: "808080" } }, // Gray background
//       alignment: { horizontal: "center", vertical: "center" }, // Center align
//     };
  
//     // Define data cell styles
//     const cellStyle = {
//       alignment: { horizontal: "center", vertical: "center" }, // Center align all cells
//     };
  
//     // Apply styles to headers
//     const range = XLSX.utils.decode_range(worksheet["!ref"]); // Get range of cells
//     for (let col = range.s.c; col <= range.e.c; col++) {
//       const cellAddress = XLSX.utils.encode_col(col) + "1"; // First row (header)
//       if (worksheet[cellAddress]) {
//         worksheet[cellAddress].s = headerStyle; // Apply header style
//       }
//     }
  
//     // Apply styles to all data cells
//     for (let row = range.s.r + 1; row <= range.e.r; row++) {
//       for (let col = range.s.c; col <= range.e.c; col++) {
//         const cellAddress = XLSX.utils.encode_col(col) + XLSX.utils.encode_row(row);
//         if (worksheet[cellAddress]) {
//           worksheet[cellAddress].s = cellStyle; // Apply cell style
//         }
//       }
//     }
  
//     // Set column width (adds padding)
//     worksheet["!cols"] = [
//       { wch: 15 }, // Name
//       { wch: 15 }, // Surname
//       { wch: 10 }, // Gender
//       { wch: 15 }, // Passport No
//       { wch: 12 }, // Date of Issue
//       { wch: 15 }, // Passport Expiry Date
//       { wch: 12 }, // Date of Birth
//       { wch: 20 }, // Study Programme
//       { wch: 25 }, // Email
//       { wch: 15 }, // Phone
//       { wch: 20 }, // Study Agreement Status
//       { wch: 20 }, // First Year Tuition Fee
//       { wch: 20 }, // Registration Fee
//       { wch: 15 }, // TRP Status
//       { wch: 15 }, // Student Status
//       { wch: 25 }, // Notes
//       { wch: 25 }, // Lack of Documents
//     ];
  
//     // Create a new workbook
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
  
//     // Convert to binary Excel file and trigger download
//     const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//     const data = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  
//     saveAs(data, "students.xlsx");
//   };
//   const columns = [
//     { key: "name", label: "NAME" },
//     { key: "surname", label: "SURNAME" },
//     { key: "gender", label: "GENDER" },
//     { key: "passport_no", label: "PASSPORT NO" },
//     { key: "date_of_issue", label: "DATE OF ISSUE" },
//     { key: "passport_expiry_date", label: "PASSPORT EXPIRY DATE" },
//     { key: "date_of_birth", label: "DATE OF BIRTH" },
//     { key: "study_programme", label: "STUDY PROGRAMME" },
//     { key: "email", label: "EMAIL" },
//     { key: "phone", label: "PHONE" },
//     { key: "study_agreement_status", label: "STUDY AGREEMENT STATUS" },
//     { key: "first_year_tuition_fee", label: "FIRST YEAR TUITION FEE" },
//     { key: "registration_fee", label: "REGISTRATION FEE" },
//     { key: "trp_status", label: "TRP STATUS" },
//     { key: "student_status", label: "STUDENT STATUS" },
//     { key: "notes", label: "NOTES" },
//     { key: "lack_of_documents", label: "LACK OF DOCUMENTS" },
//     { key: "actions", label: "ACTIONS" },
//   ];

//   const renderCell = (student, columnKey) => {
//     const cellValue = student[columnKey];

//     switch (columnKey) {
//       case "student_status":
//       case "study_agreement_status":
//         return (
//           <Chip
//             className="capitalize"
//             color={cellValue === "active" ? "success" : "danger"}
//             size="sm"
//             variant="flat"
//           >
//             {cellValue}
//           </Chip>
//         );
//       case "trp_status":
//         return (
//           <Chip
//             className="capitalize"
//             color={
//               cellValue === "approved" ? "success" : 
//               cellValue === "pending" ? "warning" : "danger"
//             }
//             size="sm"
//             variant="flat"
//           >
//             {cellValue}
//           </Chip>
//         );
//       case "actions":
//         return (
//           <div className="flex gap-2">
//             <Button size="sm" variant="bordered">Edit</Button>
//             <Button size="sm" color="danger" variant="bordered">Delete</Button>
//           </div>
//         );
//       default:
//         return cellValue ?? "-";
//     }
//   };

//   return (
//     <div className="p-4">
//       <Button color="primary" className="mb-4" onClick={exportToExcel}>
//         Export to Excel
//       </Button>
      
//       <Table aria-label="Student Table" isStriped removeWrapper className="w-full">
//         <TableHeader>
//           {columns.map((col) => (
//             <TableColumn key={col.key}>{col.label}</TableColumn>
//           ))}
//         </TableHeader>
//         <TableBody items={students} isLoading={loading} emptyContent="No students found.">
//           {(student) => (
//             <TableRow key={student.id}>
//               {columns.map((col) => (
//                 <TableCell key={col.key}>{renderCell(student, col.key)}</TableCell>
//               ))}
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

