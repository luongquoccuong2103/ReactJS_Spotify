import {Route, Routes} from 'react-router-dom'
import { Button, Menu, Dropdown } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import './HomeBody.css';
import React from 'react';
import MusicCard from '../../components/MusicCard/MusicCard';
import Play from '../../components/assets/image/MyAlbum/play';
import Album from '../Album/album';

const HomeBody = () => {
  return (
    <React.Fragment>
      <div className="greeting">
        <h2 _ngcontent-vgb-c82="" className="text-3xl text-white">
          Good Morning
        </h2>
        <h3 _ngcontent-vgb-c82="" className="mt-3 text-white text-opacity-90">
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
          <MusicCard
            url="https://i.scdn.co/image/ab67706f00000003cc785c1541d8b540da816688"
            mediades="ok"
            description="kk"
            img={<Play />}
          />
        </div>
      </div>

    </React.Fragment>
  );
};

export default HomeBody;
