import React, { useState, useEffect } from 'react';
import PlayIcon from '../../components/assets/image/Album/playIcon';
import Track from '../../components/assets/image/Album/track';
import './album.scss';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Play from '../../components/assets/image/MyAlbum/play';

const Album = (props: any) => {
  const location = useLocation();

  const [albumID, setAlbumID] = useState({ albumID: '' });
  const [albumData, setAlbumData]: any = useState();
  const [token, setToken] = useState('');
  const url = 'https://api.spotify.com/v1/albums/' + albumID;
  useEffect(() => {
    if (location.state) {
      let _state = location.state as any;
      setAlbumID(_state.albumID);
    }

    const call = async () => {
      await axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setAlbumData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      if (localStorage.getItem('accessToken')) {
        setToken(localStorage.getItem('accessToken')!);
      }
    };

    call();
  }, [location, token]);

  return (
    <React.Fragment>
      <div className="mediaSummary">
        <img src={albumData?.images[0].url} />
        <div className="flex flex-col content">
          <h3 className="text-sm text-white uppercase">Album</h3>
          <h2 className="mediaTitle">{albumData?.name}</h2>
          <div className="flex pt-5">
            <div className="text-sm font-bold text-white ng-star-inserted">
              {albumData?.artists[0].name}
            </div>
            <div className="media-info"> - {albumData?.release_date.split('-')[0]}</div>
            <div className="media-info"> - {albumData?.total_tracks} song</div>
          </div>
        </div>
      </div>
      <div className="button">
        <div
          aria-roledescription="button"
          title="Play"
          className="flex play-icon control-button large text-white bg-primary rounded-full play-button-overlay"
        >
          <Play />
        </div>
      </div>
      <div className="pb-4">
        <div className="playlist-trach-header">
          <div className="album-tracks-grid">
            <div>#</div>
            <div className="text-xs uppercase ellipsis-one-line">Title</div>
            <Track />
          </div>
        </div>
        <div className="mb-8">
          {/* insert api */}

         
            {albumData?.tracks.items.map((track: any) => (
               <div className="group">
              <div className="album-tracks-grid tracked hover:bg-[#B3B3B3] hover:bg-opacity-[30%] btn-hover ">
                <div className="block">
                  <div className="flex">
                    <div className="flex group-hover:hidden track-order">
                      <div className="text-description">{track.track_number}</div>
                    </div>
                    <div className="hidden group-hover:block track-play-button ">
                      <div className="flex" title="play" aria-roledescription="button">
                        <div className="play-icon svg-icon-play icon">
                          <PlayIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="ellipsis-one-line text-base text-white"> POP/STARS </div>
                    <div className="flex">
                      <a
                        className="text-description link-subtle ellipsis-one-line hover:underline"
                        href="#"
                      >
                        K/DA
                      </a>
                      <span className="mr-1 comma-separator ng-star-inserted">,</span>
                      <a
                        className="text-description link-subtle ellipsis-one-line hover:underline ng-star-inserted"
                        href="#"
                      >
                        {' '}
                        Madison Beer{' '}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-description"> 3:11 </div>
              </div>
              </div>
            ))}
          </div>
        
      </div>
    </React.Fragment>
  );
};

export default Album;
