import React from 'react';

interface ProductShortcutProps {
  filter: string;
  photo: string;
  active: string;
  onClick: any;
}

const ProductShortcut: React.FC<ProductShortcutProps> = ({
  filter,
  photo,
  active,
  onClick,
}) => {
  return (
    <div
      className={`w-64 h-16 shadow rounded-sm bg-gray-50 flex justify-between items-center px-5 m-5 cursor-pointer hover:border border-green-300 ${
        filter === active ? 'border bg-green-500' : ''
      }`}
      onClick={onClick}>
      <img src={photo} className='h-12 w-16 rounded' alt={filter} />
      <h3 className='text-xs font-medium font-sans'>
        {filter === '' ? 'All Products' : filter}
      </h3>
    </div>
  );
};

export default ProductShortcut;
