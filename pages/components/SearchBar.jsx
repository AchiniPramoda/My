import React from 'react';

import Image from 'next/image';
import { Stack, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { searchData } from '../redux/slice/profile';

export default function SearchBar({ setSearchValue, searchValue, isSideBar, }) {
  const dispatch = useDispatch();

  return (
    <Form.Group
      className='ts-search-group'
      controlId='searchNftCards'
    >
      <Form.Control
        className='rounded-pill'
        type='text'
        value={isSideBar && searchValue}
        onChange={(e) => {
          if (isSideBar) {
            setSearchValue(e.target.value);
          } else {
            dispatch(searchData(e.target.value));
          }
        }}
      // placeholder="Search Nfts"
      />

      <button className='ts-search-group__btn btn p-0'>
        <Image
          src='/static/icons/search-normal.svg'
          alt='...'
          width={24}
          height={24}
        />
      </button>
    </Form.Group>
  );
}
