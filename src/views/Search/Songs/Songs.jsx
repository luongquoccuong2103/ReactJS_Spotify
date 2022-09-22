import React from 'react';
import { NavLink } from 'react-router-dom';
import PlayIcon from '../../../components/assets/image/Album/playIcon';
import Track from '../../../components/assets/image/Album/track';

const dummySongs = [
  {
    order: 1,
    catergory: 'POP/Star',
    singer: 'KDA',
    singer2: 'Madison Beer',
    album: 'abc',
    length: '3:11'
  },
  {
    order: 2,
    catergory: 'POP/Star',
    singer: 'KDA',
    singer2: 'Madison Beer',
    length: '3:11'
  },
  {
    order: 3,
    catergory: 'POP/Star',
    singer: 'KDA',
    singer2: 'Madison Beer',
    length: '7:11'
  },
  {
    order: 4,
    catergory: 'POP/Star',
    singer: 'KDA',
    singer2: 'Madison Beer',
    length: '1:12'
  },
  {
    order: 5,
    catergory: 'Son Tung',
    singer: 'MTP',
    singer2: 'Quoc Cuong',
    length: '2:12'
  },
  {
    order: 6,
    catergory: 'POP/Star',
    singer: 'KDA',
    singer2: 'Madison Beer',
    length: '5:12'
  }
];

const listSong = dummySongs.map((song, index) => (
  <div className="group">
    <div className="album-tracks-grid tracked hover:bg-[#B3B3B3] hover:bg-opacity-[30%] btn-hover ">
      <div className="block">
        <div className="flex">
          <div className="flex group-hover:hidden track-order">
            <div className="text-description">{song.order}</div>
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
              backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273d1241debb8543af8322a7d6a)`
            }}
          ></div>
        </div>
        <div className="flex flex-col">
          <div className="ellipsis-one-line text-base text-white"> {song.catergory} </div>
          <div className="flex">
            <NavLink to="artistDetail" className="text-description link-subtle ellipsis-one-line hover:underline" href="#">
              {song.singer}
            </NavLink>
            <span className="mr-1 comma-separator ng-star-inserted">,</span>
            <NavLink
              className="text-description link-subtle ellipsis-one-line hover:underline ng-star-inserted"
              to="artistDetail"
            >
              {song.singer2}
            </NavLink>
          </div>
        </div>
      </div>

      <div className="text-description"> {song.length} </div>
    </div>
  </div>
));
const Songs = () => {
  return (
    <React.Fragment>
      <h2 _ngcontent-ijl-c94="" class="mt-8 mb-4 text-heading">
        Songs
      </h2>
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
