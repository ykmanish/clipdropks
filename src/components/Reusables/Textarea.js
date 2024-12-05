'use client';
import { useState } from 'react';

const TextArea = ({
  label = 'Description',
  placeholder = '',
  value = '',
  onChange,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [textValue, setTextValue] = useState(value);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (textValue === '') {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setTextValue(e.target.value);
    if (onChange) onChange(e);
  };

  // Generate a unique ID for the textarea
  const textAreaId = `textarea-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`relative ${className}`}>
      <textarea
        id={textAreaId} // Set the id for the textarea
        value={textValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="block w-full px-3 dark:text-[#ffffff] dark:border-zinc-900 hover:border-[#0c0c0c] small h-32 pt-6 border border-zinc-300 bg-transparent rounded-2xl outline-none focus:ring-2 dark:focus:ring-zinc-700 focus:ring-zinc-300 focus:border-zinc-300 transition-all "
        {...props}
      />
      <label
        htmlFor={textAreaId} // Associate the label with the textarea
        className={`absolute left-3 cursor-text small transform transition-all ${
          isFocused || textValue
            ? 'top-2 text-xs dark:text-zinc-300  small text-gray-800'
            : 'top-6 dark:text-zinc-300  -translate-y-1/2 text-base text-gray-800'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
