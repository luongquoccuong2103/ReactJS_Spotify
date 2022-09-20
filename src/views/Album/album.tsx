import React from "react";
import PlayIcon from "../../components/assets/image/Album/playIcon";
import Track from "../../components/assets/image/Album/track";
import TrackPlay from "../../components/assets/image/Album/trackPlay";
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
      <div className="button">
        <div
          aria-roledescription="button"
          title="Play"
          className="flex play-icon control-button large text-white bg-primary rounded-full play-button-overlay"
        >
          <PlayIcon />
        </div>
      </div>
      <div className="pb-4">
        <div className="playlist-trach-header">
          <div className="album-tracks-grid">
            <div>#</div>
            <div className="text-xs uppercase ellipsis-one-line">Title</div>
            <Track />
          </div>
        </div>
        <div className="mb-8">
          <div className="album-track">
            <div className="table">
              <div className="media-order">
                <div className="flex group">
                  <div className="flex group-hover:hidden track-order">
                    <span className="text-description">1</span>
                  </div>
                  <div className="hidden group-hover:block track-play-button pb-7">
                    <div
                      aria-roledescription="button"
                      title="Play"
                      className="flex "
                    >
                      <TrackPlay />
                    </div>
                  </div>
                </div>
              </div>
              <div className="track-infos">
                <div className="flex flex-col">
                  <div className="ellipsis-one-line text-base text-white">
                    Chúng Ta Của Hiện Tại
                  </div>
                  <div className="">
                    <a
                      className=" link-subtle ellipsis-one-line hover:underline "
                      href="/artist/5dfZ5uSmzR7VQK0udbAVpf"
                    >
                      Sơn Tùng M-TP
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-time"> 5:01 </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Album;
