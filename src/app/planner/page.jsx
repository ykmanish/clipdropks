"use client";
import React, { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import ThankYou from "../../components/Reusables/Thankyou";
import { stepData } from "./stepData";
const Page = () => {
  const [step, setStep] = useState(1);
  const [thankYou, setThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    date: "",
    budget: "",
    services: [],
    projectSummary: "",
    file: null,
    subscribe: false,
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setThankYou(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      date: "",
      budget: "",
      services: [],
      projectSummary: "",
      file: null,
      subscribe: false,
    });
    setStep(1);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {thankYou ? (
        <ThankYou />
      ) : (
        <div className="lg:grid h-screen lg:gap-16 mt-28 lg:mt-0 items-center lg:grid-cols-6">
          {/* Left Side (form steps) */}
          <div className="lg:col-span-4 p-6 flex flex-col">
            <progress
              className="progress w-full lg:w-2/3 bg-gray-200"
              value={(step / 4) * 100}
              max="100"
              style={{ accentColor: "black" }}
            />

            <p className="mt-3 text-sm small dark:text-[#ffffff] text-[#0c0c0c]">
              Step {step} of 4
            </p>

            {step === 1 && (
              <Step1
                formData={formData}
                onChange={handleInputChange}
                onNext={handleNext}
              />
            )}
            {step === 2 && (
              <Step2
                formData={formData}
                onChange={handleInputChange}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 3 && (
              <Step3
                formData={formData}
                onChange={handleInputChange}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 4 && (
              <Step4
                formData={formData}
                onChange={handleInputChange}
                onBack={handleBack}
                onSubmit={handleSubmit}
              />
            )}
          </div>

          {/* Right Side (Black card displaying step number) */}
          <div className="lg:col-span-2 p-6 bg-[#ebebeb] dark:bg-[#0c0c0c] w-full h-[65vh]   text-white rounded-[35px]  flex items-center justify-center">
            <div className="text-center flex flex-col items-center justify-center">
              <img
                src={stepData[step - 1].imgSrc}
                alt={`Step ${step}`}
                className="w-60 mb-6 object-center"
              />
              <p className="text-lg dark:text-[#ffffff] text-[#0c0c0c] small mb-6">
                You are currently on Step {step} of the process.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
