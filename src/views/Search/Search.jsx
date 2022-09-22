import React, { useState } from 'react';
import SearchIcon from '../../components/assets/image/Search/searchIcon';
import TimesIcon from '../../components/assets/image/Search/timesIcon';
import Album from './Album/Album';

import Artists from './Artist/Artists';
import SearchInput from './Input/SearchInput';
import './Search.scss';
import Songs from './Songs/Songs';
const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isInputFocus, setIsInputFocus] = useState(false);

  const inputHandler = (event) => {
    setSearchValue(event.target.value);
    if (event.target.value.length > 0) {
      setIsInputFocus(true);
    }
  };

  const setEmptyInput = () => {
    setSearchValue('');
    setIsInputFocus(false);
  };
  return (
    <React.Fragment>
        <SearchInput />
        <Songs />
        <Artists />
        <Album />
    </React.Fragment>
  );
};

export default Search;
