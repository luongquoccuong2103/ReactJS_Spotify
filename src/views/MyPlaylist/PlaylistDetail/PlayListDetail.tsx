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
                {/* <div className="btn-hover group">
                  <div className="playlist-tracks-grid tracked hover:bg-[#B3B3B3] hover:bg-opacity-[30%] btn-hover ">
                    <div className="block">
                      <div className="flex">
                        <div className="flex group-hover:hidden track-order">
                          <div className="text-description">{count++}</div>
                        </div>
                        <div className="hidden pt-1 group-hover:block track-play-button">
                          <div className="flex">
                            <div className="play-icon svg-icon-play icon">
                              <Play />
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
                            backgroundImage: `url(${item.track.album.images[0].url})`
                          }}
                        ></div>
                      </div>
                      <div className="flex flex-col">
                        <div className="ellipsis-one-line text-base text-white">
                          {' '}
                          {item.track.name}{' '}
                        </div>
                        <div className="flex">
                          {item.track.artists.map((artist: any, index: any) => (
                            <>
                              <a
                                className="text-description link-subtle ellipsis-one-line hover:underline"
                                href="#"
                              >
                                {' '}
                                {artist.name}{' '}
                              </a>
                              {index != item.track.artists.length - 1 && (
                                <span className="mr-1 comma-separator ng-star-inserted">,</span>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    </div>

                    <a className="text-description link-subtle hover:underline" href="#">
                      {' '}
                      {item.track.album.name}{' '}
                    </a>

                    <div className="text-description">
                      <Datefix date={item.added_at} />
                    </div>

                    <div className="text-description">
                      {' '}
                      {millisToMinutesAndSeconds(item.track.duration_ms)}{' '}
                    </div>
                  </div>
                </div> */}
                <PlayListCard
                  count={count++}
                  url={item.track.album.images[0].url}
                  artists={item.track.artists}
                  name={item.track.name}
                  albumname={item.track.album.name}
                  albumid={item.track.album.id}
                  added_at={item.added_at}
                  duration_ms={item.track.duration_ms}
                />
              </>
            ))
          : null}
      </div>
    </>
  );
};

export default PlayListDetail;
