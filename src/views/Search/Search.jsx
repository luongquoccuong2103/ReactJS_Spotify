import React, { useState } from 'react';
import SearchIcon from '../../components/assets/image/Search/searchIcon';
import TimesIcon from '../../components/assets/image/Search/timesIcon';
import Album from './Album/Album';

import Artists from './Artist/Artists';
import './Search.scss';
import Songs from './Songs/Songs';

const dummySongs = [
  {
    order: 1,
    name: 'POP/Star',
    singer: 'KDA',
    singer2: 'Madison Beer',
    album: 'abc',
    length: '3:11'
  },
  {
    order: 2,
    name: 'POP/Star',
    singer: 'KDA',
    singer2: 'Madison Beer',
    length: '3:11'
  },
  {
    order: 3,
    name: 'POP/Star',
    singer: 'KDA',
    singer2: 'Madison Beer',
    length: '7:11'
  },
  {
    order: 4,
    name: 'POP/Star',
    singer: 'KDA',
    singer2: 'Madison Beer',
    length: '1:12'
  },
  {
    order: 5,
    name: 'b',
    singer: 'MTP',
    singer2: 'Quoc Cuong',
    length: '2:12'
  },
  {
    order: 6,
    name: 'a',
    singer: 'KDA',
    singer2: 'Madison Beer',
    length: '5:12'
  }
];

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [listSongs, setListSongs] = useState([]);
  
  const searchHandler = (event) => {
    setSearchValue(event.target.value);
    const listSearchGroup = [];
    if (event.target.value.length > 0) {
      setIsInputFocus(true);
    }
    if (event.target.value !== '') {
      dummySongs.map((item) => {
        if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
          listSearchGroup.push(item);
        }
      });
      setListSongs(listSearchGroup);
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
              onChange={(text) => {
                searchHandler(text);
              }}
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
      <Songs searchValue={searchValue} listSongs={listSongs} />
      <Artists />
      <Album />
    </React.Fragment>
  );
};

export default Search;
