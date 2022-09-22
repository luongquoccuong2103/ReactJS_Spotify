import React, { useState } from 'react';
import SearchIcon from '../../../components/assets/image/Search/searchIcon';
import TimesIcon from '../../../components/assets/image/Search/timesIcon';

import './SearchInput.scss';
const SearchInput = () => {
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
      <div className="search-input-container">
        <div className="search-control">
          <div className="input-container">
            <div className="input-icon-container">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Artists, songs, albums, or playlists"
              value={searchValue}
              onChange={inputHandler}
              className="input-search"
            />
            {isInputFocus && (
              <div className="times-icon-container" onClick={setEmptyInput}>
                <TimesIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchInput;
