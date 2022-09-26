import "./playingBar.scss";
import LeftControlButton from "../assets/image/PlayingBar/leftControlButton";
import PlayButton from "../assets/image/PlayingBar/playButton";
import RightControlButton from "../assets/image/PlayingBar/rightControllButton";
import PlayerVolume from "../assets/image/PlayingBar/playerVolume";
const PlayingBar = () => {
  return (
    <div className="container">
      <div className="now-playing-bar-left"></div>
      <div className="now-playing-bar-center">
        <div className="player-controls">
          <div className="flex justify-center">
            <div className="control-button hover:text-white">
              <LeftControlButton />
            </div>
            <div className="mx-4">
              <div className="flex play-icon control-button text-black bg-white">
                <PlayButton />
              </div>
            </div>
            <div className="control-button hover:text-white">
              <RightControlButton />
            </div>
          </div>
        </div>

        <div className="player-playback">
          <span _ngcontent-luu-c73="" className="timer-duration"></span>
          <div className="flex-1 mx-2 ng-untouched ng-pristine ng-valid">
            <div className="ant-slider">
              <div className="ant-slider-rail">
                <div dir="1tr">
                  <div className="ant-slider-track"></div>
                </div>
              </div>
              <div dir="1tr">
                <div className="ant-slider-handle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
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
          <PlayerVolume />
          <div className="flex-1 mx-2 slider">
            <div className="ant-slider">
              <div className="ant-slider-rail">
                <div dir="1tr">
                  <div className="ant-slider-track"></div>
                </div>
                <div dir="1tr">
                  <div className="ant-slider-handle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingBar;
