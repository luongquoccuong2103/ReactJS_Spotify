import "./playingBar.css";
import "antd/dist/antd.css";
const PlayingBar = () => {
  return (
    <div className="container">
      <div className="now-playing-bar-left"></div>
      <div className="now-playing-bar-center">
        <div className="player-controls">
          <div className="flex justify-center">
            <div className="control-button hover:text-white">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="control-button-icon"
                fill="#B3B3B3"
                height="100%"
                width="100%"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
              </svg>
            </div>
            <div className="mx-4">
              <div className="flex play-icon control-button text-black bg-white">
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="play-button-icon"
                  fill="black"
                  height="100%"
                  width="100%"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path d="M4.018 14L14.41 8 4.018 2z"></path>
                </svg>
              </div>
            </div>
            <div className="control-button hover:text-white">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="control-button-icon"
                fill="#B3B3B3"
                height="100%"
                width="100%"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="player-playback">
          <span _ngcontent-luu-c73="" className="timer-duration"></span>
          <div className="flex-1 mx-2 ng-untouched ng-pristine ng-valid">
            <div className="ant-slider">
              <div className="ant-slider-rail">
                <div dir="1tr"> <div className="ant-slider-track"></div></div>
              </div>
              <div dir="1tr">
              <div   className="ant-slider-handle"></div>
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
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="icon-volume" fill="#B3b3b3" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732zm8.623 2.121l-.707-.707-2.147 2.147-2.146-2.147-.707.707L12.062 8l-2.146 2.146.707.707 2.146-2.147 2.147 2.147.707-.707L13.477 8l2.146-2.147z"></path></svg>
        <div className="flex-1 mx-2 slider">
        <div className="ant-slider">
          <div className="ant-slider-rail">
          <div dir="1tr">
          <div className="ant-slider-track"></div>
          </div>
          <div dir="1tr">
          <div  className="ant-slider-handle" ></div>
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
