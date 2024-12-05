'use client';
import { useState } from 'react';

const Input = ({
  label = 'Name',
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (inputValue === '') {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  // Generate a unique ID for the input
  const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`relative ${className}`}>
      <input
        id={inputId} // Set the id for the input
        type={type}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="block w-full px-3 dark:text-[#ffffff] dark:border-zinc-900 hover:border-[#0c0c0c] small h-14 pt-6 border border-zinc-300 bg-transparent rounded-2xl outline-none focus:ring-2 dark:focus:ring-zinc-700 focus:ring-zinc-300 focus:border-zinc-300 transition-all"
        {...props}
      />
      <label
        htmlFor={inputId} // Associate the label with the input
        className={`absolute cursor-text left-3 small transform transition-all ${
          isFocused || inputValue
            ? 'top-2 text-xs dark:text-zinc-300   text-gray-800'
            : 'top-1/2  dark:text-zinc-300 -translate-y-1/2 text-base text-gray-800'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
