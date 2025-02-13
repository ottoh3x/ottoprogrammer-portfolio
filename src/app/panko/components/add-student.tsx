// "use client";
// import React from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { useForm, Controller } from "react-hook-form";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   Input,
//   Select,
//   SelectItem,
//   Textarea,
//   useDisclosure
// } from "@nextui-org/react";
// import supabase from '../../../../utils/supabase';

// // Initialize Supabase client


// export default function StudentFormModal() {
//   const {isOpen, onOpen, onClose} = useDisclosure();
  
//   const { 
//     control, 
//     handleSubmit, 
//     reset,
//     formState: { errors }
//   } = useForm({
//     defaultValues: {
//         name: '',
//         surname: '',
//         gender: '',
//         passport_no: '',
//         date_of_issue: '',
//         passport_expire_date: '',
//         date_of_birth: '',
//         study_programme: '',
//         email: '',
//         phone: '',
//         study_agreement_status: '',
//         tuition_fee_first_year: '',
//         registration_fee: '',
//         trp_status: '',
//         student_status: '',
//         notes: '',
//         lack_of_documents: ''
//     }
//   });

//   const onSubmit = async (data) => {
//     try {
//       const submissionData = {
//         ...data,
//         tuition_fee_first_year: data.tuition_fee_first_year ? parseFloat(data.tuition_fee_first_year) : null,
//         registration_fee: data.registration_fee ? parseFloat(data.registration_fee) : null
//       };

//       const { error } = await supabase
//         .from('futureagencystudents')
//         .insert([submissionData]);

//       if (error) throw error;

//       console.log('Student added successfully');
//       reset();
//       onClose();

//     } catch (error) {
//       console.error('Error adding student:', error.message);
//     }
//   };

//   return (
//     <>
//       <Button onPress={onOpen} color="primary">
//         Add New Student
//       </Button>

//       <Modal 
//         isOpen={isOpen} 
//         onClose={onClose}
//         scrollBehavior="inside"
//         size="5xl"
//       >
//         <ModalContent>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <ModalHeader>Add New Student</ModalHeader>
//             <ModalBody>
//               <div className="grid grid-cols-3 gap-4">
//                 <Controller
//                   name="name"
//                   control={control}
//                   rules={{ required: 'Name is required' }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       label="Name"
//                       placeholder="Enter name"
//                       variant="bordered"
//                       isInvalid={!!errors.name}
//                       errorMessage={errors.name?.message}
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="surname"
//                   control={control}
//                   rules={{ required: 'Surname is required' }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       label="Surname"
//                       placeholder="Enter surname"
//                       variant="bordered"
//                       isInvalid={!!errors.surname}
//                       errorMessage={errors.surname?.message}
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="gender"
//                   control={control}
//                   rules={{ required: 'Gender is required' }}
//                   render={({ field }) => (
//                     <Select
//                       {...field}
//                       label="Gender"
//                       placeholder="Select gender"
//                       variant="bordered"
//                       selectedKeys={field.value ? [field.value] : []}
//                       onChange={(e) => field.onChange(e.target.value)}
//                       isInvalid={!!errors.gender}
//                       errorMessage={errors.gender?.message}
//                     >
//                       <SelectItem key="male" value="male">Male</SelectItem>
//                       <SelectItem key="female" value="female">Female</SelectItem>
//                     </Select>
//                   )}
//                 />

//                 <Controller
//                   name="passport_no"
//                   control={control}
//                   rules={{ required: 'Passport number is required' }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       label="Passport No."
//                       placeholder="Enter passport number"
//                       variant="bordered"
//                       isInvalid={!!errors.passport_no}
//                       errorMessage={errors.passport_no?.message}
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="date_of_issue"
//                   control={control}
//                   rules={{ required: 'Date of issue is required' }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       type="date"
//                       label="Date of Issue"
//                       variant="bordered"
//                       isInvalid={!!errors.date_of_issue}
//                       errorMessage={errors.date_of_issue?.message}
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="passport_expire_date"
//                   control={control}
//                   rules={{ required: 'Passport expiry date is required' }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       type="date"
//                       label="Passport Expire Date"
//                       variant="bordered"
//                       isInvalid={!!errors.passport_expire_date}
//                       errorMessage={errors.passport_expire_date?.message}
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="date_of_birth"
//                   control={control}
//                   rules={{ required: 'Date of birth is required' }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       type="date"
//                       label="Date of Birth"
//                       variant="bordered"
//                       isInvalid={!!errors.date_of_birth}
//                       errorMessage={errors.date_of_birth?.message}
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="study_programme"
//                   control={control}
//                   rules={{ required: 'Study programme is required' }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       label="Study Programme"
//                       placeholder="Enter study programme"
//                       variant="bordered"
//                       isInvalid={!!errors.study_programme}
//                       errorMessage={errors.study_programme?.message}
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="email"
//                   control={control}
//                   rules={{ 
//                     required: 'Email is required',
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: "Invalid email address"
//                     }
//                   }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       type="email"
//                       label="Email"
//                       placeholder="Enter email"
//                       variant="bordered"
//                       isInvalid={!!errors.email}
//                       errorMessage={errors.email?.message}
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="phone"
//                   control={control}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       type="tel"
//                       label="Phone"
//                       placeholder="Enter phone number"
//                       variant="bordered"
//                       isInvalid={!!errors.phone}
//                       errorMessage={errors.phone?.message}
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="study_agreement_status"
//                   control={control}
//                   render={({ field }) => (
//                     <Select
//                       {...field}
//                       label="Study Agreement Status"
//                       placeholder="Select status"
//                       variant="bordered"
//                       selectedKeys={field.value ? [field.value] : []}
//                       onChange={(e) => field.onChange(e.target.value)}
//                     >
//                       <SelectItem key="sent" value="sent">Sent</SelectItem>
//                       <SelectItem key="signed" value="signed">Signed</SelectItem>
//                     </Select>
//                   )}
//                 />

//                 <Controller
//                   name="tuition_fee_first_year"
//                   control={control}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       type="number"
//                       label="Tuition Fee 1st Year"
//                       placeholder="Enter tuition fee"
//                       variant="bordered"
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="registration_fee"
//                   control={control}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       type="number"
//                       label="Registration Fee"
//                       placeholder="Enter registration fee"
//                       variant="bordered"
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="trp_status"
//                   control={control}
//                   render={({ field }) => (
//                     <Select
//                       {...field}
//                       label="TRP Status"
//                       placeholder="Select TRP status"
//                       variant="bordered"
//                       selectedKeys={field.value ? [field.value] : []}
//                       onChange={(e) => field.onChange(e.target.value)}
//                     >
//                       <SelectItem key="pending" value="pending">Pending</SelectItem>
//                       <SelectItem key="approved" value="approved">Approved</SelectItem>
//                       <SelectItem key="rejected" value="rejected">Rejected</SelectItem>
//                     </Select>
//                   )}
//                 />

//                 <Controller
//                   name="student_status"
//                   control={control}
//                   render={({ field }) => (
//                     <Select
//                       {...field}
//                       label="Student Status"
//                       placeholder="Select student status"
//                       variant="bordered"
//                       selectedKeys={field.value ? [field.value] : []}
//                       onChange={(e) => field.onChange(e.target.value)}
//                     >
//                       <SelectItem key="active" value="active">Active</SelectItem>
//                       <SelectItem key="inactive" value="inactive">Inactive</SelectItem>
//                     </Select>
//                   )}
//                 />

//                 <Controller
//                   name="notes"
//                   control={control}
//                   render={({ field }) => (
//                     <Textarea
//                       {...field}
//                       label="Notes"
//                       placeholder="Enter notes"
//                       variant="bordered"
//                       className="col-span-2"
//                     />
//                   )}
//                 />

//                 <Controller
//                   name="lack_of_documents"
//                   control={control}
//                   render={({ field }) => (
//                     <Textarea
//                       {...field}
//                       label="Lack of Documents"
//                       placeholder="Enter missing documents"
//                       variant="bordered"
//                       className="col-span-2"
//                     />
//                   )}
//                 />
//               </div>
//             </ModalBody>
//             <ModalFooter>
//               <Button color="danger" variant="light" onPress={onClose}>
//                 Cancel
//               </Button>
//               <Button color="primary" type="submit">
//                 Add Student
//               </Button>
//             </ModalFooter>
//           </form>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

