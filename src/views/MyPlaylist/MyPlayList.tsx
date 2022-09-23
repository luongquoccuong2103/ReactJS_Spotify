import Play from "../../components/assets/image/MyPlayList/play";
import "./MyPlayList.css";
import { Routes, Route, Link } from 'react-router-dom';
const MyPlayList = () => {
  return (
    <>
      <div className="block">
        <div className="common-grid">
          {/* call api */}
          <div className="contented max-h-[260px]">
            <a className="flex flex-col flex-1" href="#">
              <div className="media-cover">
                <div
                  className="mb-4 media-cover-2"
                  style={{
                    borderRadius: "initial",
                    backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273d1241debb8543af8322a7d6a)`,
                  }}
                ></div>
                <div className="play-button-overlay">
                  <div className="flex play-icon control-button large text-white bg-primary">
                    <div className="play-icon svgicon text-[1.5rem]">
                      <Play />
                    </div>
                  </div>
                </div>
              </div>
              <div _ngcontent-yvy-c84="" className="media-description">
                <div className="font-bold text-white ellipsis-one-line hover:text-white">
                  {" "}
                  Danh sách phát của tôi #1{" "}
                </div>
                <div className="text-description"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPlayList;
