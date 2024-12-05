import React from "react";
import TextArea from "../../../components/Reusables/Textarea";
import Input from "../../../components/Reusables/Input";
import Button from "../../../components/Reusables/Button";
import FileUpload from "../../../components/Reusables/FileUpload";
import NewsCheck from "@/components/Reusables/NewsCheck";

const Step4 = ({ formData, onChange, onBack, onSubmit }) => {
  return (
    <div>
      <h1 className="mt-10 text-3xl dark:text-[#ffffff] small text-[#0c0c0c]">
        Give us the deets!
      </h1>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <TextArea
          label="Please provide a summary of your project"
          name="projectSummary"
          value={formData.projectSummary}
          onChange={onChange}
          className="mt-6 w-2/3"
          rows="4"
        />

        {/* Use the FileUpload component */}
        <FileUpload
          label="Or upload a project brief (File size PDF, docx, max. 10 MB)"
          name="file"
          className="mt-4"
          accept=".pdf,.doc,.docx"
          onChange={onChange}
          file={formData.file}
        />

        <NewsCheck/>
        <div className="flex mt-6">
          <Button
            text="Back"
            onClick={onBack}
            className="mr-2 w-fit px-6 bg-gray-200"
          />
          <Button text="Send Enquiry" type="submit" className="w-fit px-6" />
        </div>
      </form>
    </div>
  );
};

export default Step4;
