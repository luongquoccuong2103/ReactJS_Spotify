import React from "react";
import "./album.css";

const Album = () => {
  return (
    <React.Fragment>
      <div className="mediaSummary">
        <img src="https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d" />
        <div className="flex flex-col content">
          <h3 className="text-sm text-white uppercase">Album</h3>
          <h2 className="mediaTitle">Chúng Ta Của Hiện Tại</h2>
          <div className="flex">
            <div className="text-sm font-bold text-white ng-star-inserted">
              Sơn Tùng M-TP
            </div>
            <div className="media-info "> - 2020</div>
            <div className="media-info "> - 1 song</div>
          </div>
        </div>
      </div>
      <div>
        <div
          aria-roledescription="button"
          title="Play"
          className="flex play-icon control-button large text-white bg-primary rounded-full play-button-overlay"
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            height="60%"
            width="60%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M4.018 14L14.41 8 4.018 2z"></path>
          </svg>
        </div>
      </div>
      <div className="pb-4">
        <div className="playlist-trach-header">
          <div className="album-tracks-grid">
            <div>#</div>
            <div className="text-xs uppercase ellipsis-one-line">Title</div>
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="album-track-icon"
              height="100%"
              width="100%"
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
        <div className="mb-8">
          <div className="album-tracks">
            <div className="group">
              <div className="track-row">
                <div className="flex group-hover:hidden hover: track-order">
                  <span className="text-description">1</span>
                  <div className="hidden pt-1 group-hover:block track-play-button">
                    <svg
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="100%"
                      width="100%"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path d="M4.018 14L14.41 8 4.018 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="track-infos">
                <div className="flex flex-col">
                  <div className="ellipsis-one-line text-base text-white">
                    Chúng Ta Của Hiện Tại
                  </div>
                  <div  className="flex ng-star-inserted">
                    <a className=" link-subtle ellipsis-one-line hover:underline "
                      href="/artist/5dfZ5uSmzR7VQK0udbAVpf"
                    >
                      Sơn Tùng M-TP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Album;
