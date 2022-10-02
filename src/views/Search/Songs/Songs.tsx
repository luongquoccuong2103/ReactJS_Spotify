import React from 'react';
import { NavLink } from 'react-router-dom';
import PlayIcon from '../../../components/assets/image/Album/playIcon';
import Track from '../../../components/assets/image/Album/track';

const Songs = (props: any) => {
  function millisToMinutesAndSeconds(millis: any) {
    var minutes: any = Math.floor(millis / 60000);
    var seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  const listSong = props.data?.tracks.items.map((song: any, index: any) => (
    <div className="group" key={index}>
      <div className="album-tracks-grid tracked hover:bg-[#B3B3B3] hover:bg-opacity-[30%] btn-hover ">
        <div className="block">
          <div className="flex">
            <div className="flex group-hover:hidden track-order">
              <div className="text-description">{index + 1}</div>
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
                backgroundImage: `url(${song?.album.images[0].url})`
              }}
            ></div>
          </div>
          <div className="flex flex-col">
            <div className="ellipsis-one-line text-base text-white"> {song.name} </div>
            <div className="flex">
              {song.artists.map((artists: any, index: any) => (
                <>
                  <NavLink
                    to={`../artist/${artists?.id}`}
                    className="text-description link-subtle ellipsis-one-line hover:underline"
                    state={{artistId: artists?.id}}
                  >
                    {artists.name}
                  </NavLink>
                  {song.artists.length - 1 != index  && <span className="mr-1 comma-separator ng-star-inserted"> , </span>}

                </>
              ))}
            </div>
          </div>
        </div>

        <div className="text-description"> {millisToMinutesAndSeconds(song?.duration_ms)} </div>
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <h2 className="mt-8 mb-4 text-heading">Songs</h2>
      <div className="pb-4">
        <div className="playlist-trach-header">
          <div className="album-tracks-grid">
            <div>#</div>
            <div className="text-xs uppercase ellipsis-one-line">Title</div>
            <Track />
          </div>
        </div>
        <div className="mb-8">{listSong}</div>
      </div>
    </React.Fragment>
  );
};

export default Songs;
