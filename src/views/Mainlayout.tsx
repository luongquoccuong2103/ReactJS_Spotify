import { Button, Menu, Dropdown } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'antd/dist/antd.min.css';
import './MainLayout.css';

import HomeBody from './Home/HomeBody';
import PlayingBar from '../components/PlayingBar/playingBar';
import Album from './Album/album';
import MyPlayList from './MyPlaylist/MyPlayList';
import MyAlbum from './MyAlbum/MyAlbum';
import LikedSong from './LikedSong/LikedSong';
import BodyBrowse from './Browse';
import TopList from './Browse/TopLists/TopList';
import HeaderBar from '../components/Header/header';
import React from 'react';
import SiderBar from '../components/Sider/sider';

function getItem(label: string, key: any) {
  return {
    key,
    label
  };
}

const MainLayout = () => {
  const siderlist = [
    getItem('Home', '1'),
    getItem('Search', '2'),
    getItem('Browse', '3'),
    getItem('My Playlists', '4'),
    getItem('My Albums', '5')
  ];

  const playlist = [getItem('Liked songs', '6')];

  return (
    <React.Fragment>
      <Layout className="layout" style={{}}>
        <Sider
          width={232}
          style={{
            backgroundColor: 'black'
          }}
          className="navigationBar max-h-[100vh]"
        >
          <SiderBar />
        </Sider>
        <Layout
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.8),#121212)`,
            backgroundColor: 'gray'
          }}
          className=""
        >
          <HeaderBar />
          <Content className="main-view content-spacing">
            <Routes>
              <Route path="/ReactJS_Spotify" element={<HomeBody />}></Route>
              <Route path="/album" element={<MyAlbum />} />
              <Route path="/browse" element={<BodyBrowse />} />
              <Route path="/myPlayList" element={<MyPlayList />} />
              <Route path="/likedSong" element={<LikedSong />} />
              <Route path="/search" element={<LikedSong />} />
            </Routes>
            {/* <Album /> */}
            {/* <MyAlbum /> */}
            {/* <HomeBody /> */}
            {/* <BodyBrowse /> */}
            {/* <TopList /> */}
            {/* <MyPlayList /> */}

            {/* <LikedSong /> */}
          </Content>
          {/* can protal */}
        </Layout>
      </Layout>
      {/* <PlayingBar /> */}
    </React.Fragment>
  );
};

export default MainLayout;
