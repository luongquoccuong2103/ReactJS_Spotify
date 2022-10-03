import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { Route, Routes } from 'react-router-dom';
// import 'antd/dist/antd.min.css';
import './MainLayout.scss';

import React from 'react';
import HeaderBar from '../components/Header/header';
import PlayingBar from '../components/PlayingBar/playingBar';
import SiderBar from '../components/Sider/sider';
import Album from './Album/album';
import ArtistDetail from './ArtistDetail/ArtistDetail';
import BodyBrowse from './Browse/Browse';
import HomeBody from './Home/HomeBody';
import LikedSong from './LikedSong/LikedSong';
import MyAlbum from './MyAlbum/MyAlbum';
import MyPlayList from './MyPlaylist/MyPlayList';
import Search from './Search/Search';
import BrowseDetail from './Browse/BrowseDetail/BrowseDetail';
import PlayListDetail from './MyPlaylist/PlaylistDetail/PlayListDetail';

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
              <Route path="/ReactJS_Spotify" element={<HomeBody />} />
              <Route path="/album/:albumId" element={<Album />} />
              <Route path="/artist/:artistId" element={<ArtistDetail />} />
              <Route path="/myAlbum" element={<MyAlbum />} />
              <Route path="/browse" element={<BodyBrowse />} />
              <Route path="/browse/:browseid" element={<BrowseDetail />} />
              {/* <Route path="/browse/topList/myPlayList" element={<MyPlayList />} /> */}
              <Route path="/playlist" element={<MyPlayList />} />
              <Route path="/playlist/:platlistid" element={<PlayListDetail />} />
              <Route path="/likedSong" element={<LikedSong />} />
              <Route path="/search" element={<Search />} />
              <Route path="/search/artistDetail" element={<ArtistDetail />} />
              <Route path="/search/artistDetail/album" element={<Album />} />
              <Route path="/search/album" element={<Album />} />
              <Route path="/search/album/artistDetail" element={<ArtistDetail />} />
            </Routes>

            <Routes>{/* <Route path="/" element={<HomeBody />} /> */}</Routes>
          </Content>
        </Layout>
      </Layout>
      <PlayingBar />
    </React.Fragment>
  );
};

export default MainLayout;
