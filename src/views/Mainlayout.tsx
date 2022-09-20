import { Button, Menu, Dropdown } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";

// import 'antd/dist/antd.min.css';
import "./index.css";



import HomeBody from "./Home/HomeBody";
import PlayingBar from "../components/PlayingBar/playingBar";
import Album from "./Album/album";
import MyPlayList from "./Playlist";
import MyAlbum from "./Albums";
import LikedSong from "./Likedsong";
import BodyBrowse from "./Browse";
import TopList from "./Browse/TopLists";
import HeaderBar from "../components/Header/header";
import SiderBar from "../components/Sider/sider";

function getItem(label: string, key: any) {
  return {
    key,
    label,
  };
}

const MainLayout = () => {
  const siderlist = [
    getItem("Home", "1"),
    getItem("Search", "2"),
    getItem("Browse", "3"),
    getItem("My Playlists", "4"),
    getItem("My Albums", "5"),
  ];

  const playlist = [getItem("Liked songs", "6")];

  return (
    <Layout className="layout" style={{
      overflow: 'hidden'
    }}>
      <Sider
        width={232}
        style={{
          backgroundColor: "black",
        }}
        className="navigationBar max-h-[100vh]"
      >
        <SiderBar/>
      </Sider>
      <Layout
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.8),#121212)`,
          backgroundColor: "gray",
        }}
        className=""
      >
        <HeaderBar/>
        <Content
        className='main-view content-spacing'
        >
          {/* <Album /> */}
          {/* <HomeBody /> */}
          {/* <BodyBrowse/> */}
          {/* <TopList/> */}
          {/* <MyPlayList/> */}
          {/* <MyAlbum/> */}
          <LikedSong/>
          
        </Content>
        {/* can protal */}
        {/* <PlayingBar /> */}
        
      </Layout>
    </Layout>
  );
};

export default MainLayout;
