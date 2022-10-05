import axios from 'axios';
import React, { useState, useEffect } from 'react';
import IsPlayingTrack from '../../components/assets/image/MyPlayList/isPlayingTrack';
import SearchIcon from '../../components/assets/image/Search/searchIcon';
import TimesIcon from '../../components/assets/image/Search/timesIcon';
import Album from './Album/Album';
import Artists from './Artist/Artists';
import Playlist from './Playlists/Playlist';
import './Search.scss';
import Songs from './Songs/Songs';

const Search = (props: any) => {
  const [searchValue, setSearchValue] = useState('');
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [data, setData]: any = useState();
  const token = localStorage.getItem('accessToken');

  async function searchHandler(event: any) {
    setSearchValue(event.target.value);

    await axios
      .get(
        'https://api.spotify.com/v1/search?q=' +
          event.target.value +
          '&type=track%2Cartist%2Calbum%2Cplaylist&limit=8',
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    if (event.target.value.length > 0) {
      setIsInputFocus(true);
    }
  }

  const setEmptyInput = () => {
    setSearchValue('');
    setIsInputFocus(false);
  };

  useEffect(() => {
    const call = async () => {};

    call();
  }, [token]);

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
              // onKeyPress={(event) => {
              //   if (event.key == 'Enter') {
              //     searchHandler();
              //   }
              // }}
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
        <div>
              <IsPlayingTrack />
        </div>
      </div>
      {data?.tracks.items.length > 0 && <Songs data={data} />}
      {data?.artists.items.length > 0 && <Artists data={data} />}
      {data?.albums.items.length > 0 && <Album data={data} />}
      {data?.playlists.items.length > 0 && <Playlist data={data} />}
    </React.Fragment>
  );
};

export default Search;
