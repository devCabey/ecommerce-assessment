import React from 'react';

interface InputItemProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: any;
  id?: string;
  htmlFor?: string;
  moreStyle?: string;
  name?: string;
  other?: any;
  error?: any;
  label: string;
}

const InputItem: React.FC<InputItemProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  id,
  htmlFor,
  moreStyle,
  other,
  error,
  label,
}) => {
  return (
    <div className={`flex flex-col w-full my-2`}>
      <label htmlFor={htmlFor} className='text-xs my-2 font-medium'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={`border text-xs h-10 px-2 ${moreStyle}`}
        id={id}
        {...other}
      />
      {error ? (
        <p className='text-sm text-red-500 mt-2 '>{error.message}</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default InputItem;
