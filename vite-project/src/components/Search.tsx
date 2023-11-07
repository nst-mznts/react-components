import React, { useState, useEffect, ChangeEvent } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import '../styles/App.css';

interface SearchProps {
  setValue: (arg: string) => void;
}

type InputEvent = ChangeEvent<HTMLInputElement>;

const Search: React.FC<SearchProps> = ({ setValue }: SearchProps) => {
  const localSearch = localStorage.getItem('search');
  const [inputValue, setInputValue] = useState(localSearch || '');

  useEffect(() => {
    localSearch && setInputValue(localSearch);
  }, [localSearch]);

  return (
    <div className="search">
      <MyInput
        value={inputValue || ''}
        type="text"
        placeholder="Type to search..."
        onChange={(event: InputEvent) => {
          const query = event.target.value;
          localStorage.setItem('search', event.target.value);
          setInputValue(query);
        }}
      />
      <MyButton onClick={() => setValue(localSearch)}>Search</MyButton>
    </div>
  );
};
export default Search;
