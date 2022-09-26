import React from 'react';
import { NavLink } from 'react-router-dom';
import './ArtistCard.scss';

const ArtistCard = (props: any) => {
  return (
    <React.Fragment>
      <NavLink to="artistDetail" className="contented  max-h-[280px]">
        <a className="flex flex-col flex-1" href="#">
          <div className="media-cover">
            <div
              className="mb-4 media-cover-2 bg-white"
              style={{
                borderRadius: '500px',

                backgroundImage: `url(${props.url})`
              }}
            ></div>
            <div className="play-button-overlay">
              <div className="flex play-icon control-button large text-white bg-primary">
                <div className="play-icon svgicon text-[1.5rem]">{props.img}</div>
              </div>
            </div>
          </div>
          <div _ngcontent-yvy-c84="" className="media-description">
            <div className="font-bold text-white ellipsis-one-line hover:text-white">
              {props.mediades}
            </div>
            <div className="text-description">{props.description}</div>
          </div>
        </a>
      </NavLink>
    </React.Fragment>
  );
};

export default ArtistCard;
