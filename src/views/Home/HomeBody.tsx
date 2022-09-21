import { Button, Menu, Dropdown } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import './HomeBody.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Album from '../Album/album';
import MusicCard from '../../components/MusicCard/MusicCard';
import Play from '../../components/assets/image/MyAlbum/play';
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
      <Link to="album" className="recently-played-list">
        <div className="recently-played">
          <h2 className="mt-8 mb-4 text-heading">Recently Played</h2>
          <div className="content-grid">
            <MusicCard
              url="https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d"
              img={<Play />}
              mediades={'Son Tung'}
              description={'test'}
            />  
          </div>
        </div>
      </Link>
      <div className="featured-playlists">
        <h2 className="mt-8 mb-4 text-heading">Ngủ ngon, mơ đẹp!.</h2>
        <div className="content-grid">
          <MusicCard
            url="https://i.scdn.co/image/ab67706f00000003cc785c1541d8b540da816688"
            img={<Play />}
            mediades={'Son Tung'}
            description={'test'}
          />
        </div>
      </div>
      <Routes>
        <Route path="/ReactJS_Spotify/album" element={<Album />}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default HomeBody;
