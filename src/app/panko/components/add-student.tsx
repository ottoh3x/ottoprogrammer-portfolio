"use client";
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
  Checkbox
} from "@heroui/react";
import supabase from '@/lib/supabase';

export default function StudentFormModal() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  
  const { 
    control, 
    handleSubmit, 
    reset,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
        name: '',
        surname: '',
        gender: '',
        passport_no: '',
        date_of_issue: '',
        passport_expire_date: '',
        date_of_birth: '',
        study_programme: '',
        email: '',
        phone: '',
        study_agreement_status: '',
        tuition_fee_first_year: '',
        registration_fee: '',
        trp_status: '',
        student_status: '',
        notes: '',
        lack_of_documents: '',
        is_agency_application: false,
        tuition_fee_paid: false,
        student_photo: null,
        passport_scan: null
    }
  });

  const onSubmit = async (data) => {
    try {
      // Create basic student data object
      const submissionData = {
        ...data,
        tuition_fee_first_year: data.tuition_fee_first_year ? parseFloat(data.tuition_fee_first_year) : null,
        registration_fee: data.registration_fee ? parseFloat(data.registration_fee) : null,
        // Include boolean fields from checkboxes
        is_agency_application: data.is_agency_application || false,
        tuition_fee_paid: data.tuition_fee_paid || false
      };

      // Remove file objects from data before sending to database table
      delete submissionData.student_photo;
      delete submissionData.passport_scan;

      // Insert student data first to get the ID
      const { data: studentData, error } = await supabase
        .from('futureagencystudents')
        .insert([submissionData])
        .select();

      if (error) throw error;

      // If we have files, upload them
      if (data.student_photo || data.passport_scan) {
        const studentId = studentData[0].id;

        // Upload student photo if exists
        if (data.student_photo && data.student_photo[0]) {
          const studentPhotoFile = data.student_photo[0];
          const studentPhotoExt = studentPhotoFile.name.split('.').pop();
          const studentPhotoPath = `student-photos/${studentId}/photo.${studentPhotoExt}`;
          
          const { error: uploadPhotoError } = await supabase
            .storage
            .from('student-files')
            .upload(studentPhotoPath, studentPhotoFile, {
              cacheControl: '3600',
              upsert: true
            });
            
          if (uploadPhotoError) throw uploadPhotoError;
          
          // Update the student record with the photo path
          const { error: updateError } = await supabase
            .from('futureagencystudents')
            .update({ photo_path: studentPhotoPath })
            .eq('id', studentId);
            
          if (updateError) throw updateError;
        }

        // Upload passport scan if exists
        if (data.passport_scan && data.passport_scan[0]) {
          const passportFile = data.passport_scan[0];
          const passportExt = passportFile.name.split('.').pop();
          const passportPath = `student-passports/${studentId}/passport.${passportExt}`;
          
          const { error: uploadPassportError } = await supabase
            .storage
            .from('student-files')
            .upload(passportPath, passportFile, {
              cacheControl: '3600',
              upsert: true
            });
            
          if (uploadPassportError) throw uploadPassportError;
          
          // Update the student record with the passport scan path
          const { error: updateError } = await supabase
            .from('futureagencystudents')
            .update({ passport_scan_path: passportPath })
            .eq('id', studentId);
            
          if (updateError) throw updateError;
        }
      }

      console.log('Student added successfully');
      reset();
      onClose();

    } catch (error) {
      console.error('Error adding student:', error.message);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Add New Student
      </Button>

      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        scrollBehavior="inside"
        size="5xl"
      >
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Add New Student</ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-3 gap-4">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: 'Name is required' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Name"
                      placeholder="Enter name"
                      variant="bordered"
                      isInvalid={!!errors.name}
                      errorMessage={errors.name?.message}
                    />
                  )}
                />

                <Controller
                  name="surname"
                  control={control}
                  rules={{ required: 'Surname is required' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Surname"
                      placeholder="Enter surname"
                      variant="bordered"
                      isInvalid={!!errors.surname}
                      errorMessage={errors.surname?.message}
                    />
                  )}
                />

                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: 'Gender is required' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Gender"
                      placeholder="Select gender"
                      variant="bordered"
                      selectedKeys={field.value ? [field.value] : []}
                      onChange={(e) => field.onChange(e.target.value)}
                      isInvalid={!!errors.gender}
                      errorMessage={errors.gender?.message}
                    >
                      <SelectItem key="male" value="male">Male</SelectItem>
                      <SelectItem key="female" value="female">Female</SelectItem>
                    </Select>
                  )}
                />

                {/* New photo upload field */}
                <div className="col-span-3">
                  <Controller
                    name="student_photo"
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                      <div>
                        <label className="block text-sm font-medium mb-1">Student Photo</label>
                        <Input
                          {...field}
                          type="file"
                          accept="image/*"
                          onChange={(e) => onChange(e.target.files)}
                          variant="bordered"
                          className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-primary-500 file:text-white hover:file:bg-primary-600"
                        />
                      </div>
                    )}
                  />
                </div>

                <Controller
                  name="passport_no"
                  control={control}
                  rules={{ required: 'Passport number is required' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Passport No."
                      placeholder="Enter passport number"
                      variant="bordered"
                      isInvalid={!!errors.passport_no}
                      errorMessage={errors.passport_no?.message}
                    />
                  )}
                />

                <Controller
                  name="date_of_issue"
                  control={control}
                  rules={{ required: 'Date of issue is required' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="date"
                      label="Date of Issue"
                      variant="bordered"
                      isInvalid={!!errors.date_of_issue}
                      errorMessage={errors.date_of_issue?.message}
                    />
                  )}
                />

                <Controller
                  name="passport_expire_date"
                  control={control}
                  rules={{ required: 'Passport expiry date is required' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="date"
                      label="Passport Expire Date"
                      variant="bordered"
                      isInvalid={!!errors.passport_expire_date}
                      errorMessage={errors.passport_expire_date?.message}
                    />
                  )}
                />

                {/* New passport scan upload field */}
                <div className="col-span-3">
                  <Controller
                    name="passport_scan"
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                      <div>
                        <label className="block text-sm font-medium mb-1">Passport Scan</label>
                        <Input
                          {...field}
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => onChange(e.target.files)}
                          variant="bordered"
                          className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-primary-500 file:text-white hover:file:bg-primary-600"
                        />
                      </div>
                    )}
                  />
                </div>

                <Controller
                  name="date_of_birth"
                  control={control}
                  rules={{ required: 'Date of birth is required' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="date"
                      label="Date of Birth"
                      variant="bordered"
                      isInvalid={!!errors.date_of_birth}
                      errorMessage={errors.date_of_birth?.message}
                    />
                  )}
                />

                <Controller
                  name="study_programme"
                  control={control}
                  rules={{ required: 'Study programme is required' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Study Programme"
                      placeholder="Enter study programme"
                      variant="bordered"
                      isInvalid={!!errors.study_programme}
                      errorMessage={errors.study_programme?.message}
                    />
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  rules={{ 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="email"
                      label="Email"
                      placeholder="Enter email"
                      variant="bordered"
                      isInvalid={!!errors.email}
                      errorMessage={errors.email?.message}
                    />
                  )}
                />

                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="tel"
                      label="Phone"
                      placeholder="Enter phone number"
                      variant="bordered"
                      isInvalid={!!errors.phone}
                      errorMessage={errors.phone?.message}
                    />
                  )}
                />

                {/* New Checkboxes - Agency Application and Tuition Fee Paid */}
                <div className="col-span-3 flex flex-col gap-2">
                  <Controller
                    name="is_agency_application"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Checkbox
                        isSelected={value}
                        onValueChange={onChange}
                      >
                        Applying with Agency
                      </Checkbox>
                    )}
                  />
                  
                  <Controller
                    name="tuition_fee_paid"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Checkbox
                        isSelected={value}
                        onValueChange={onChange}
                      >
                        Tuition Fee Paid
                      </Checkbox>
                    )}
                  />
                </div>

                <Controller
                  name="study_agreement_status"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Study Agreement Status"
                      placeholder="Select status"
                      variant="bordered"
                      selectedKeys={field.value ? [field.value] : []}
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      <SelectItem key="sent" value="sent">Sent</SelectItem>
                      <SelectItem key="signed" value="signed">Signed</SelectItem>
                    </Select>
                  )}
                />

                <Controller
                  name="tuition_fee_first_year"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="number"
                      label="Tuition Fee 1st Year"
                      placeholder="Enter tuition fee"
                      variant="bordered"
                    />
                  )}
                />

                <Controller
                  name="registration_fee"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="number"
                      label="Registration Fee"
                      placeholder="Enter registration fee"
                      variant="bordered"
                    />
                  )}
                />

                <Controller
                  name="trp_status"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="TRP Status"
                      placeholder="Select TRP status"
                      variant="bordered"
                      selectedKeys={field.value ? [field.value] : []}
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      <SelectItem key="pending" value="pending">Pending</SelectItem>
                      <SelectItem key="approved" value="approved">Approved</SelectItem>
                      <SelectItem key="rejected" value="rejected">Rejected</SelectItem>
                    </Select>
                  )}
                />

                <Controller
                  name="student_status"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Student Status"
                      placeholder="Select student status"
                      variant="bordered"
                      selectedKeys={field.value ? [field.value] : []}
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      <SelectItem key="active" value="active">Active</SelectItem>
                      <SelectItem key="inactive" value="inactive">Inactive</SelectItem>
                    </Select>
                  )}
                />

                <Controller
                  name="notes"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      label="Notes"
                      placeholder="Enter notes"
                      variant="bordered"
                      className="col-span-2"
                    />
                  )}
                />

                <Controller
                  name="lack_of_documents"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      label="Lack of Documents"
                      placeholder="Enter missing documents"
                      variant="bordered"
                      className="col-span-2"
                    />
                  )}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Add Student
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}