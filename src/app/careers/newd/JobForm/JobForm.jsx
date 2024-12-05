"use client";
import React, { useState } from "react";
import Input from "@/components/Reusables/Input";
import FileUpload from "@/components/Reusables/FileUpload";
import TextArea from "@/components/Reusables/Textarea";
import Button from "@/components/Reusables/Button";

const JobForm = () => {
  const [file, setFile] = useState(null);

  // Handle file input change
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div className="bg-[#ffffff] dark:bg-[#0c0c0c] max-w-7xl rounded-[35px] mx-auto w-full flex items-center h-auto py-16 mb-20 mt-16">
      <div className="grid max-w-5xl gap-20 mx-auto grid-cols-6 ">
        <div className="flex col-span-4 flex-col">
          <h1 className="small flex dark:text-[#ffffff] items-center justify-start gap-2 text-[17px] text-[#0c0c0c]">
            <span className="bg-[#0c0c0c] dark:bg-[#ffffff] w-2 h-2 rounded-full"></span>
            Think you fit the bill?
          </h1>
          <h1 className="text-5xl mt-5 dark:text-[#ffffff] small text-[#0c0c0c]">
            Apply for this position
          </h1>
          <form>
            <div className="grid grid-cols-2 mt-14 w-full gap-4 items-center">
            <Input type="name" label="Name" className="w-full" />
            <Input type="email" label="Email Address" className="w-full" />
            <Input type="email" label="Phone Number" className="w-full" />
            <Input
              type="email"
              label="Your Website or Portfolio (optional)"
              className="w-full"
            />
            </div>
           
           
           
            <FileUpload
              name="file"
              className="mt-4 w-full"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
            <p className="small dark:text-gray-300 text-sm mt-3">(File type PDF, max. 10 MB)</p>
            {/* Display the uploaded file name */}
            {file && (
              <p className="mt-4 flex items-center text-lg small dark:text-[#ffffff] text-[#0c0c0c]">
                <img
                  src="/document.svg"
                  alt="file icon"
                  className="h-6 w-6 mr-2"
                />
                {file.name}
              </p>
            )}
            
           
            <TextArea
              label="Why are you right for this role?"
              className="mt-4"
            />
            <p className="small dark:text-[#ffffff] mt-4 text-[#0c0c0c] text-md">
              By submitting this form I accept the Privacy Policy of this site.
            </p>
            <Button
              className="mt-4 text-[#0c0c0c] px-6"
              text="Submit your application"
            />
            <p className="small mt-8 text-xs dark:text-gray-300 text-[#0c0c0c]">
              Your CV and the personal details contained in it are used solely
              by ClipDropks to help recruit the right candidate for a specific
              role. These details will never be shared with any third parties
              and will be deleted either three months after you apply for a
              position, or when the role is filled, whichever is sooner. If
              you’d like us to delete your details before then, please see our
              privacy policy for information on how to contact us about this.
            </p>
          </form>
        </div>
        <div className="col-span-2 mt-40 flex justify-end">
          <div className="bg-[#f5f5f5] dark:bg-[#101010] rounded-[35px] w-64 h-60"></div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
