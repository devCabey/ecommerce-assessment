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
}) => {
  return (
    <div className={`flex flex-col w-full my-2`}>
      <label htmlFor={htmlFor} className='text-xs my-2 font-medium'>
        {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border text-xs h-10 px-2 ${moreStyle}`}
        id={id}
      />
    </div>
  );
};

export default InputItem;
