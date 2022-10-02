import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
          <div className="grid py-3 place-items-center w-12 h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFF"
              viewBox="0 0 55 80"
              height="100%"
              width="100%"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <g transform="matrix(1 0 0 -1 0 80)">
                <rect width="10" height="20" rx="3">
                  <animate
                    attributeName="height"
                    begin="0s"
                    dur="4.3s"
                    values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20"
                    calcMode="linear"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
                <rect x="15" width="10" height="80" rx="3">
                  <animate
                    attributeName="height"
                    begin="0s"
                    dur="2s"
                    values="80;55;33;5;75;23;73;33;12;14;60;80"
                    calcMode="linear"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
                <rect x="30" width="10" height="50" rx="3">
                  <animate
                    attributeName="height"
                    begin="0s"
                    dur="1.4s"
                    values="50;34;78;23;56;23;34;76;80;54;21;50"
                    calcMode="linear"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
                <rect x="45" width="10" height="30" rx="3">
                  <animate
                    attributeName="height"
                    begin="0s"
                    dur="2s"
                    values="30;45;13;80;56;72;45;76;34;23;67;30"
                    calcMode="linear"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
            </svg>
          </div>
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
