import { Button, Menu, Dropdown } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import './HomeBody.css';
import React from 'react';
import MusicCard from '../../components/MusicCard/MusicCard';
import Play from '../../components/assets/image/MyAlbum/play';

const HomeBody = () => {
  return (
    <React.Fragment>
      <div className="greeting">
        <h2 className="text-3xl text-white">Good Morning</h2>
        <h3 className="mt-3 text-white text-opacity-90">
          Thanks for visiting ReactJS Spotify. It was built with TailwindCSS and Ant-Design by
          DuatTQ and CuongLQ. Cheers 🍺
        </h3>
      </div>
      <div className="recently-played-list">
        <div className="recently-played">
          <h2 className="mt-8 mb-4 text-heading">Recently Played</h2>
          <div className="content-grid">
            <MusicCard
              url="https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d"
              mediades="ok"
              description="kk"
              img={<Play />}
            />
          </div>
        </div>
      </div>
      <div className="featured-playlists">
        <h2 className="mt-8 mb-4 text-heading">Ngủ ngon, mơ đẹp!.</h2>
        <div className="content-grid">
          <div className="media">
            <div className="media-content">
              <img
                src="https://i.scdn.co/image/ab67706f00000003cc785c1541d8b540da816688"
                className="media-image"
              />
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
              <div className="font-bold text-white ellipsis-one-line hover:text-white">
                {' '}
                Chúng Ta Của Hiện Tại{' '}
              </div>
              <div className="text-description">
                {' '}
                Những giai điệu êm dịu nhất cho giấc ngủ trọn vẹn.{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeBody;
