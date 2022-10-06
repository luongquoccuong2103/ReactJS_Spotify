import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Pause from '../assets/image/MyAlbum/pause';
import Play from '../assets/image/MyAlbum/play';
import IsPlayingTrack from '../assets/image/MyPlayList/isPlayingTrack';

const PlayListCard = (props: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const token = localStorage.getItem('accessToken');
  function millisToMinutesAndSeconds(millis: any) {
    var minutes: any = Math.floor(millis / 60000);
    var seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  const playTrack = async (
    id: any,
    name: any,
    artist: any,
    image: any,
    context_uri: any,
    track_number: any
  ) => {
    console.log(id);
    setIsPlaying(!isPlaying);
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/play`,
      {
        context_uri,
        offset: {
          position: track_number - 1
        },
        position_ms: 0
      },

      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.status === 204) {
    }
  };

  const Datefix = (props: any) => {
    let date = new Date(props.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });
    return <p>{date}</p>;
  };
  const [onplay, setOnPlay] = useState(false);
  return (
    <>
      <div className="btn-hover group" onClick={() => setOnPlay(!onplay)}>
        <div className="playlist-tracks-grid tracked hover:bg-[#B3B3B3] hover:bg-opacity-[30%] btn-hover ">
          <div className="block">
            <div className="flex">
              <div className="flex group-hover:hidden track-order">
                {!onplay && <div className="text-description">{props.count}</div>}
                {onplay && (
                  <div className="play-icon svg-icon-play icon">
                    <IsPlayingTrack />
                  </div>
                )}
              </div>
              <div className="hidden  group-hover:block track-play-button">
                <div className="flex">
                  <div className="play-icon svg-icon-play icon" onClick={() => playTrack}>
                    {!onplay && <Play />}
                    {onplay && <Pause />}
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
                  backgroundImage: `url(${props.url})`
                }}
              ></div>
            </div>
            <div className="flex flex-col">
              <div className="ellipsis-one-line text-base text-white"> {props.name} </div>
              <div className="flex">
                {props.artists.map((artist: any, index: any) => (
                  <>
                    <NavLink
                      className="text-description link-subtle ellipsis-one-line hover:underline"
                      to={`../../artist/${artist.id}`}
                      state={{ artistId: artist.id }}
                    >
                      {' '}
                      {artist.name}{' '}
                    </NavLink>
                    {index != props.artists.length - 1 && (
                      <span className="mr-1 comma-separator ng-star-inserted">,</span>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>

          <NavLink
            className="text-description link-subtle hover:underline"
            to={`../../album/${props.albumid}`}
            state={{ Id: props.albumid }}
          >
            {' '}
            {props.albumname}{' '}
          </NavLink>

          <div className="text-description">
            {/* {item.added_at} */}
            <Datefix date={props.added_at} />
          </div>

          <div className="text-description"> {millisToMinutesAndSeconds(props.duration_ms)} </div>
        </div>
      </div>
    </>
  );
};

export default PlayListCard;
