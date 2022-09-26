import React from 'react';
import { NavLink } from 'react-router-dom';
import PlayIcon from '../../components/assets/image/Album/playIcon';
import './ArtistDetail.scss';
const ArtistDetail = () => {
    const dummySongs = [
        {
          order: 1,
          catergory: 'POP/Star',
          singer: 'KDA',
          singer2: 'Madison Beer',
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
          <div className="artist-tracks-grid tracked hover:bg-[#B3B3B3] hover:bg-opacity-[30%] btn-hover ">
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
              </div>
            </div>
            <div> <NavLink to="album" className="text-description link-subtle hover:underline" > Vì Anh Đâu Có Biết </NavLink></div>
            <div className="text-description"> {song.length} </div>
          </div>
        </div>
      ));
  return (
    <React.Fragment>
      <div className="mediaSummary">
        <img className='artist-image' src="https://i.scdn.co/image/ab6761610000e5ebde3d3210433dd11c07678420" />
        <div className="flex flex-col content">
          <h3 className="text-sm text-white uppercase">Artist</h3>
          <h2 className="mediaTitle">Justatee</h2>
          <div className="flex">
            <div className="media-info "> 1231231 Followers</div>
          </div>
        </div>
      </div>
      <h2 _ngcontent-ijl-c94="" class="mt-8 mb-4 text-heading">
        Popular
      </h2>
      <div className="mb-8">
          {listSong}
        </div>
    </React.Fragment>
  );
};

export default ArtistDetail