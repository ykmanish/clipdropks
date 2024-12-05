"use client";
import React, { useState } from "react";
import FormInput from "./FormInput"; // Import your reusable component
import CountrySelector from "./CountrySelector";

const Page = () => {
  const [step, setStep] = useState(1); // To track the current step
  const [file, setFile] = useState(null); // To track the uploaded file
  const [submitted, setSubmitted] = useState(false); // To track submission status

  const handleNextStep = () => {
    setStep(step + 1); // Move to the next step
  };

  const handlePreviousStep = () => {
    setStep(step - 1); // Move to the previous step
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]); // Set the uploaded file
    }
  };

  const handleRemoveFile = () => {
    setFile(null); // Clear the uploaded file
  };

  const handleSubmit = () => {
    // Add your submission logic here (e.g., API call)
    setSubmitted(true); // Set the submitted state to true
  };

  return (
    <div>
      <div className="max-w-7xl h-screen flex flex-col justify-center items-center p-4 pt-20 pb-20 mx-auto">
        {submitted ? (
          <div className="bg-[#ffffff] max-w-5xl h-auto py-12 rounded-[35px] w-full mx-auto text-center flex flex-col">
            <img src="/sent.svg" alt="Success" className="w-20 h-20 mx-auto" />
            <h1 className="lg:text-5xl text-3xl font-semibold text-[#0c0c0c] mt-8 text-center small">
              Thank you for applying!
            </h1>
            <p className="small text-lg mt-4">
              Your application has been submitted successfully. We will get back
              to you soon.
            </p>
            <div className="flex justify-center">
            <button className="small mt-10 w-1/3 gap-2 flex justify-center items-center bg-[#0c0c0c] text-white py-3 px-6 rounded-[35px]">
              Explore more opportunities
            </button>
            </div>
            
          </div>
        ) : (
          <>
            <h1 className="text-4xl small mt-10 text-[#0c0c0c]">
              You are applying for{" "}
              <span className="font-semibold">
                Regulatory Compliance Assurance Manager
              </span>
            </h1>
            <p className="mt-4 flex items-center gap-4 small text-[15px] lg:text-lg text-[#101010]">
              <img
                src="https://www.svgrepo.com/show/500639/office-building.svg"
                alt="arrow"
                className="h-6 w-6"
              />
              Office: Barcelona · Dublin · Krakow · Lisbon · Madrid · Porto
            </p>

            <div className="bg-[#ffffff] mt-10 p-10 flex flex-col items-start h-auto py-10 rounded-[35px] w-full">
              {step === 1 && (
                <>
                  <h1 className="small text-2xl text-[#0c0c0c] font-semibold">
                    General information
                  </h1>
                  <div className="grid grid-cols-2 mt-8 w-full gap-4">
                    <FormInput
                      label="Full name"
                      type="text"
                      name="fullName"
                      placeholder="Enter your name"
                    />
                    <FormInput
                      label="Email address"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <FormInput
                      label="Phone number"
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                    />
                    <CountrySelector />
                  </div>
                  <div className="mt-8 flex justify-between w-full">
                    <button
                      onClick={handleNextStep}
                      className="small gap-2 flex justify-center items-center bg-[#0c0c0c] text-white py-3 px-6 rounded-[35px]"
                    >
                      Next step
                    </button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h1 className="small text-2xl text-[#0c0c0c] font-semibold">
                    Upload your resume
                  </h1>
                  <div className="mt-8 w-full">
                    <label className="block mb-2 small text-sm font-medium text-gray-900">
                      CV / Resume (pdf, doc, docx)
                    </label>
                    <div className="relative w-1/3">
                      {!file ? (
                        <>
                          <input
                            type="file"
                            id="file-upload"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden" // Hide the default file input
                          />

                          <label
                            htmlFor="file-upload"
                            className="block text-center small w-full border border-dotted border-[#0c0c0c] text-black py-3 px-6 rounded-2xl cursor-pointer"
                          >
                            Click to attach document
                          </label>
                        </>
                      ) : (
                        <div className="flex items-center mt-4 p-4 border border-zinc-500 border-dotted rounded-3xl">
                          <img
                            src="/document.svg"
                            alt="file icon"
                            className="h-8 w-8 mr-4"
                          />
                          <div className="flex-grow ">
                            <p className="text-md small font-semibold">
                              {file.name}
                            </p>
                            <p className="text-sm small text-gray-500">
                              {(file.size / 1024).toFixed(2)} KB
                            </p>
                          </div>
                          <button
                            onClick={handleRemoveFile}
                            className="text-[#0c0c0c] text-3xl hover:text-zinc-600"
                          >
                            &times;
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-start gap-4 w-full">
                    <button
                      onClick={handlePreviousStep}
                      className="small gap-2 flex justify-center items-center bg-[#e0e0e0] text-[#0c0c0c] py-3 px-6 rounded-[35px]"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="small gap-2 flex justify-center items-center bg-[#0c0c0c] text-white py-3 px-6 rounded-[35px]"
                    >
                      Next step
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h1 className="small text-2xl text-[#0c0c0c] font-semibold">
                    Salary expectation
                  </h1>
                  <div className="mt-8 w-1/2">
                    <FormInput
                      label="What are your gross annual salary expectations? (optional)"
                      type="text"
                      name="salary"
                      placeholder="Enter your expected salary"
                    />
                  </div>
                  <p className="mt-12 small text-sm text-[#0c0c0c] max-w-3xl">
                    By submitting your application, you confirm that all
                    information provided is accurate and complete to the best of
                    your knowledge, and you agree to our Privacy Policy and
                    Terms of Employment.
                  </p>
                  <div className="mt-8 flex justify-start gap-4 w-full">
                    <button
                      onClick={handlePreviousStep}
                      className="small gap-2 flex justify-center items-center bg-[#e0e0e0] text-[#0c0c0c] py-3 px-6 rounded-[35px]"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="small gap-2 flex justify-center items-center bg-[#0c0c0c] text-white py-3 px-6 rounded-[35px]"
                    >
                      Submit
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
