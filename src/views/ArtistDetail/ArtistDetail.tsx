import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PlayIcon from '../../components/assets/image/Album/playIcon';
import './ArtistDetail.scss';
const ArtistDetail = () => {
  const location = useLocation();
  const [artistID, setArtistID] = useState({ artistId: '' });
  const [artistData, setArtistData]: any = useState();
  const [artistTopTracks, setArtistTopTracks] : any = useState();
  const [token, setToken] = useState('');
  const url = 'https://api.spotify.com/v1/artists/' + artistID;
  const urlGetTopTracks = 'https://api.spotify.com/v1/artists/' + artistID +  '/top-tracks?country=ES'
  let order = 1;
  useEffect(() => {
    if (location.state) {
      let _state = location.state as any;
      setArtistID(_state.artistId);
      console.log(_state.artistId)
    }

    const getArtist = async () => {
      await axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setArtistData(response.data);
         
        })
        .catch((error) => {
          console.log(error);
        });

      if (localStorage.getItem('accessToken')) {
        setToken(localStorage.getItem('accessToken')!);
      }
    };

    const getArtistTopTrack = async () => {
      await axios
        .get(urlGetTopTracks, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setArtistTopTracks(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });

      if (localStorage.getItem('accessToken')) {
        setToken(localStorage.getItem('accessToken')!);
      }
    };

    getArtist();
    getArtistTopTrack();
  }, [location,token]);


  function millisToMinutesAndSeconds(millis: any) {
    var minutes: any = Math.floor(millis / 60000);
    var seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  
  const listSong = artistTopTracks?.tracks.map((track : any) => (
    <div className="group">
      <div className="artist-tracks-grid tracked hover:bg-[#B3B3B3] hover:bg-opacity-[30%] btn-hover ">
        <div className="block">
          <div className="flex">
            <div className="flex group-hover:hidden track-order">
              <div className="text-description">{order++}</div>
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
          <div className="track-cover">
            <div
              className="media-cover-2"
              style={{
                backgroundImage: `url(${track.album.images[0].url})`
              }}
            ></div>
          </div>
          <div className="flex flex-col">
            <div className="ellipsis-one-line text-base text-white"> {track.name} </div>
          </div>
        </div>
        <div>
          {' '}
          <NavLink to="album" className="text-description link-subtle hover:underline">
          {track.album.name}
          </NavLink>
        </div>
        <div className="text-description"> {millisToMinutesAndSeconds(track.duration_ms)} </div>
      </div>
    </div>
  ));
  return (
    <React.Fragment>
      <div className="mediaSummary">
        <img
          className="artist-image"
          src={artistData?.images[0]?.url}
        />
        <div className="flex flex-col content">
          <h3 className="text-sm text-white uppercase">Artist</h3>
          <h2 className="mediaTitle">{artistData?.name}</h2>
          <div className="flex">
            <div className="media-info pt-5"> {artistData?.followers.total} Followers</div>
          </div>
        </div>
      </div>
      <h2 _ngcontent-ijl-c94="" className="mt-8 mb-4 text-heading">
        Popular
      </h2>
      <div className="mb-8">{listSong}</div>
    </React.Fragment>
  );
};

export default ArtistDetail;
