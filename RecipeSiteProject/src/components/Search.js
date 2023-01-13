import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = (props) => {
  const [searchFood, setSearchFood] = useState('');

  const handleChange = (event) => {
    setSearchFood(event.target.value);
    props.onSearch(event.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input
        placeholder="Search by Name"
        value={searchFood}
        onChange={handleChange}
        type="text"
      />
    </>
  );
};

export default Search;
