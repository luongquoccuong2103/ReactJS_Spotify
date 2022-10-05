import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Play from '../../../components/assets/image/MyAlbum/play';
import PlayListCard from '../../../components/PlayListCard/PlayListCard';

import './PlayListDetail.scss';

const PlayListDetail = () => {
  const location = useLocation();
  const a = location.state.Id;
  const url = 'https://api.spotify.com/v1/playlists/' + a;
  const token = localStorage.getItem('accessToken');
  const [data, setData]: any = useState();
  const [selectedPlaylistId, setSelectedPlaylistId] = useState();
  let count = 1;
  function millisToMinutesAndSeconds(millis: any) {
    var minutes: any = Math.floor(millis / 60000);

    var seconds: any = ((millis % 60000) / 1000).toFixed(0);

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  

  useEffect(() => {
    const call = async () => {
      await axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    call();
  }, [location, token]);

  const Datefix = (props: any) => {
    let date = new Date(props.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });
    return <p>{date}</p>;
  };

  return (
    <>
      {data ? (
        <div className="imbg">
          <div
            className="media-cover-2"
            style={{
              backgroundImage: `url(${data.images[0].url})`
            }}
          ></div>
          <div className="flex flex-col">
            <h3 className="text-sm text-white uppercase">Playlist</h3>
            <h2 className="media-title ellipsis-one-line m-0">{data.name}</h2>
            <div className="mt-3 mb-2 text-description"></div>
            <div className="flex">
              <div className="media-info">
                {data?.owner ? <>{data.owner.display_name}</> : null} -&nbsp;
                <span className="text-white text-opacity-70">
                  {data?.tracks
                    ? `${
                        data.tracks.total == 1
                          ? `${data.tracks.total} song`
                          : `${data.tracks.total} songs`
                      }`
                    : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="pb-[24px]">
        <div className="flex play-icon control-button h-[48px] w-[48px] text-white bg-primary">
          <div className="play-icon h-[25px]  text-[1.5rem]">
            <Play />
          </div>
        </div>
      </div>

      <div>
        <div className="pb-4">
          <div className="playlist-tracks-header">
            <div className="playlist-tracks-grid child:text-white child:text-opacity-70">
              <div>#</div>
              <div className="text-xs uppercase ellipsis-one-line">Title</div>
              <div className="text-xs uppercase ellipsis-one-line">Album</div>
              <div className="text-xs uppercase ellipsis-one-line">Date added</div>
              <div
                aria-hidden="true"
                title="duration"
                _nghost-xmp-c14=""
                aria-label="clock-icon"
                className="svg-icon-clock"
              >
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    d="M7.999 3h-1v5h3V7h-2V3zM7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 14A6.508 6.508 0 011 7.5C1 3.916 3.916 1 7.5 1S14 3.916 14 7.5 11.084 14 7.5 14z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        {/* insert api */}

        {data?.tracks?.items
          ? data.tracks.items.map((item: any) => (
              <>
                <PlayListCard
                  count={count++}
                  url={item.track.album.images[0].url}
                  artists={item.track.artists}
                  name={item.track.name}
                  albumname={item.track.album.name}
                  albumid={item.track.album.id}
                  added_at={item.added_at}
                  duration_ms={item.track.duration_ms}
                  id = {item.track.id}
                />
            
              </>
            ))
          : null}
          
      </div>
    </>
  );
};

export default PlayListDetail;
