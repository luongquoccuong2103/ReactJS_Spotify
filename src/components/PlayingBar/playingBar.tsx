import axios from 'axios';
import { useEffect, useState } from 'react';
import LeftControlButton from '../assets/image/PlayingBar/leftControlButton';
import Pause from '../assets/image/PlayingBar/pause';
import PlayButton from '../assets/image/PlayingBar/playButton';
import PlayerVolume from '../assets/image/PlayingBar/playerVolume';
import RightControlButton from '../assets/image/PlayingBar/rightControllButton';
import './playingBar.scss';
import { FiRepeat } from 'react-icons/fi';
import { BsShuffle, BsFillPauseCircleFill, BsFillPlayCircleFill } from 'react-icons/bs';
import { CgPlayTrackPrev, CgPlayTrackNext } from 'react-icons/cg';
import PlayerVolumeMuted from '../assets/image/PlayingBar/playVolumeMuted';
import SpotifyPlayer from 'react-spotify-web-playback';
const PlayingBar = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const token = localStorage.getItem('accessToken');
 
  const [data, setData]: any = useState();
  const [playVolume, setPlayVolume]: any = useState(true);
  const [volumePlayer, setVolumePlayer] = useState(0);
  
  const onButtonPlayClick = () => {
    if (isPlaying == true) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const setTimeTrack = (e : any) => {

  }

  useEffect(() => {
    const call = async () => {
      await axios
        .get('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    call();
  }, [token]);

  const changeTrack = async (type: any) => {
    await axios
      .post(
        `https://api.spotify.com/v1/me/player/${type}`,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeState = async () => {
    const state = isPlaying ? 'pause' : 'play';
    await axios
      .put(
        `https://api.spotify.com/v1/me/player/${state}`,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      )
      .then((response) => {
        setIsPlaying(!isPlaying);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setVolume = async (e: any) => {
    await axios
      .put(
        'https://api.spotify.com/v1/me/player/volume',
        {},
        {
          params: {
            volume_percent: e.target.value
          },
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
    if (e.target.value == 0) {
      setPlayVolume(false);
    } else {
      setPlayVolume(true);
    }
  };

  const playVolumeHanler = async () => {
    setPlayVolume(!playVolume);
  };
  if (!token) return null
  return (
    <div className="container z-50">
        <div className="now-playing-bar-left">
          {data && (
            <div className="track">
              <div className="track-image">
                <img src={data.item.album.images[2].url} alt="currentPlaying" />
              </div>
              <div className="track-info">
                <h4>{data.item.name}</h4>
                <h6>{data.item.artists[0].name}</h6>
              </div>
            </div>
          )}
        </div>
        <div className="now-playing-bar-center">
          <div className="player-controls">
            <div className="flex justify-center">
              <div className="control-button hover:text-white">
                <CgPlayTrackPrev
                  className="CgPlayTrack"
                  onClick={() => {
                    changeTrack('previous');
                  }}
                />
              </div>
              <div className="mx-4">
                <div className="flex play-icon control-button " onClick={onButtonPlayClick}>
                  {isPlaying ? (
                    <BsFillPauseCircleFill onClick={changeState} className="playIcon" />
                  ) : (
                    <BsFillPlayCircleFill onClick={changeState} className="playIcon" />
                  )}
                </div>
              </div>
              <div className="control-button hover:text-white">
                <CgPlayTrackNext
                  className="CgPlayTrack"
                  onClick={() => {
                    changeTrack('next');
                  }}
                />
              </div>
            </div>
          </div>

          <div className="player-playback">
            <span _ngcontent-luu-c73="" className="timer-duration"></span>
            <div className="flex-1 mx-2 ">
              <div className="ant-slider">
                <div className="flex-1 mx-2 slider">
                  <input
                    className="play-bar "
                    type="range"
                    min={0}
                    max={100}
                    onMouseUp={(e) => setTimeTrack(e)}
                  />
                  <span> 3: 21</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center ml-20">
          <div className="mr-5">
            <div className="flex items-center">
              <div className="inline-block">
                <button className="ant-switch">
                  <span className="ant-switch-handle"></span>
                  <span className="ant-switch-inner"></span>
                  <div className="ant-click-animating-node"></div>
                </button>
              </div>
            </div>
          </div>
          <div className="player-volume">
            {playVolume == false ? <PlayerVolume /> : <PlayerVolumeMuted />}

            <div className="flex-1 mx-2 slider">
              <input
                className="volume-bar "
                type="range"
                min={0}
                max={100}
                onMouseUp={(e) => setVolume(e)}
              />
            </div>
          </div>
        </div>
      {/* <SpotifyPlayer token={token} showSaveIcon play={true}/> */}
    </div>
  );
};

export default PlayingBar;
