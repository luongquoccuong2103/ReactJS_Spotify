import React from 'react';
import { NavLink } from 'react-router-dom';
import Play from '../assets/image/MyAlbum/play';
import './MusicCard.scss';

const MusicCard = (props: any) => {
  return (
    <React.Fragment>
      <NavLink to="album" className="contented  max-h-[260px]">
        <a className="flex flex-col flex-1" href="#">
          <div className="media-cover">
            <div
              className="mb-4 media-cover-2 bg-black"
              style={{
                borderRadius: 'initial',
                // backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273d1241debb8543af8322a7d6a)`
                backgroundImage: `url(${props.url})`
              }}
            ></div>
            <div className="play-button-overlay">
              <div className="flex play-icon control-button large text-white bg-primary">
                <div className="play-icon svgicon text-[1.5rem]">
                  <Play />
                  {/* {props.img} */}
                </div>
              </div>
            </div>
          </div>
          <div _ngcontent-yvy-c84="" className="media-description">
            <div className="font-bold text-white ellipsis-one-line hover:text-white">
              {' '}
              {/* POP/STARS */}
              {props.mediades}{' '}
            </div>
            <div className="text-description">
              {/* K/DA */}
              {props.description}
            </div>
          </div>
        </a>
      </NavLink>
    </React.Fragment>
  );
};

export default MusicCard;
