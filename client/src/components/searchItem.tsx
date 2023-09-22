import React from 'react';
import { Link } from 'react-router-dom';

interface SearchItemProps {
  id: string;
  name: string;
  photo: string;
  onClick: () => void;
}

const SearchItem: React.FC<SearchItemProps> = ({
  id,
  name,
  photo,
  onClick,
}) => {
  return (
    <span onClick={onClick}>
      <Link
        to={`/products/${id}`}
        className='w-80 border-b h-14 cursor-pointer flex justify-between items-center px-2 gap-3 rounded my-2 shadow'>
        <img src={photo} alt='product' className='w-12 h-12' />
        <h5 className='flex-1 text-sm'>{name}</h5>
      </Link>
    </span>
  );
};

export default SearchItem;
