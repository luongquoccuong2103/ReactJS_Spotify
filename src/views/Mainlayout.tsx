import Layout, { Content, Footer } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { Navigate, Route, Routes } from 'react-router-dom';
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

const MainLayout = () => {
  
  const token = localStorage.getItem('accessToken');
  //   <Layout>
  //   <Header>header</Header>
  //   <Layout>
  //     <Sider>left sidebar</Sider>
  //     <Content>main content</Content>
  //     <Sider>right sidebar</Sider>
  //   </Layout>
  //   <Footer>footer</Footer>
  // </Layout>
  <script src="https://sdk.scdn.co/spotify-player.js">
    
  </script>
  return (
    <React.Fragment>
      <Layout className="layout max-h-[calc(100vh-90px)]  overflow-hidden">
        <Sider
          width={232}
          style={{
            backgroundColor: 'black'
          }}
          className="navigationBar "
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
              <Route path="*" element={<Navigate to="/ReactJS_Spotify" />} />
              <Route path="/ReactJS_Spotify" element={<HomeBody />} />
              <Route path="/album/:albumId" element={<Album />} />
              <Route path="/artist/:artistId" element={<ArtistDetail />} />
              <Route path="/myAlbum" element={<MyAlbum />} />
              <Route path="/browse" element={<BodyBrowse />} />
              <Route path="/browse/:browseid" element={<BrowseDetail />} />
              <Route path="/playlist" element={<MyPlayList />} />
              <Route path="/playlist/:platlistid" element={<PlayListDetail />} />
              <Route path="/likedSong" element={<LikedSong />} />
              <Route path="/search" element={<Search />} />
              <Route path="/search/::playlistid" element={<PlayListDetail />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
      <PlayingBar />
    </React.Fragment>
  );
};

export default MainLayout;
