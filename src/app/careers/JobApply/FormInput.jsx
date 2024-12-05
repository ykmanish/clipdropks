import React from "react";

const FormInput = ({ label, type = "text", name, placeholder }) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text text-[17px] small">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input small h-14 text-[17px] mt-2 placeholder:text-zinc-500 text-[#0c0c0c] bg-[#ebebf0]/40 rounded-2xl placeholder:small placeholder:text-[15px] w-full"
      />
    </label>
  );
};

export default FormInput;
