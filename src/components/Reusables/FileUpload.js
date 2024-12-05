// FileUpload.js
import React from "react";

const FileUpload = ({ label, name, accept, onChange, file, className }) => {
  return (
    <div className={`file-upload-component ${className || ""}`}>
      <label className="my-6 dark:text-[#ffffff] text-sm small text-[#0c0c0c]">{label}</label>
      <input
        type="file"
        id={`${name}-upload`}
        name={name}
        accept={accept}
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor={`${name}-upload`}
        className={`block small text-center dark:text-[#ffffff] w-2/3 dark:border-zinc-600 border border-[#0c0c0c] border-dashed text-black py-3 px-6 rounded-2xl cursor-pointer ${
          className || ""
        }`}
      >
        Click to attach document
      </label>

      {/* Display file name and icon if a file is uploaded */}
      {file && (
        <p className="mt-4 dark:text-[#ffffff] flex items-center text-lg small text-[#0c0c0c]">
          <img
            src="/document.svg"
            alt="file icon"
            className="h-6 w-6 mr-2"
          />
          {file.name}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
