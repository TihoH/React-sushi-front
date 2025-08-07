import React, { FC, ChangeEvent } from 'react';

interface CustomInputProps {
  placeholder: string;
  type?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<CustomInputProps> = ({ placeholder, type = 'text', className = '', onChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      onChange={onChange}
    />
  );
};

export default CustomInput;