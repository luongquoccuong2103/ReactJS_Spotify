import React from 'react';
import PlayIcon from '../../components/assets/image/Album/playIcon';
import Track from '../../components/assets/image/Album/track';
import TrackPlay from '../../components/assets/image/Album/trackPlay';
import Play from '../../components/assets/image/MyAlbum/play';
import './album.scss';

const Album = () => {
  return (
    <React.Fragment>
      <div className="mediaSummary">
        <img src="https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d" />
        <div className="flex flex-col content">
          <h3 className="text-sm text-white uppercase">Album</h3>
          <h2 className="mediaTitle">Chúng Ta Của Hiện Tại</h2>
          <div className="flex">
            <div className="text-sm font-bold text-white ng-star-inserted">Sơn Tùng M-TP</div>
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
          {/* insert api */}
          <div className="group">
            <div className="album-tracks-grid tracked hover:bg-[#B3B3B3] hover:bg-opacity-[30%] btn-hover ">
              <div className="block">
                <div className="flex">
                  <div className="flex group-hover:hidden track-order">
                    <div className="text-description">1</div>
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
                <div className="flex flex-col">
                  <div className="ellipsis-one-line text-base text-white"> POP/STARS </div>
                  <div className="flex">
                    <a
                      className="text-description link-subtle ellipsis-one-line hover:underline"
                      href="#"
                    >
                      K/DA
                    </a>
                    <span className="mr-1 comma-separator ng-star-inserted">,</span>
                    <a
                      className="text-description link-subtle ellipsis-one-line hover:underline ng-star-inserted"
                      href="#"
                    >
                      {' '}
                      Madison Beer{' '}
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-description"> 3:11 </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Album;
