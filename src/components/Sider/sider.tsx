import { Routes, Route, NavLink , Link} from 'react-router-dom';
import { Menu } from 'antd';
import Logo from '../assets/image/Sider/logo';
import './sider.css';
import Home from '../../views/Home/HomeBody';
import MyAlbum from '../../views/MyAlbum/MyAlbum';
const SiderBar = () => {
  return (
    <>
      <div className="h-[100vh]">
        <div id="logo" className="px-[24px] mb-[16px] mt-[24px]">
          <span>
            <Logo />
          </span>
        </div>
        <Menu
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: 'none'
          }}
          mode="inline"
        >
          {/* sau dung nav link de css chu */}
          <Menu.Item>
            <NavLink to="/ReactJS_Spotify">Home</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="search">Search</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="browse">Browse</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="myPlayList">My Playlists</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="myAlbum">My Albums</NavLink>
          </Menu.Item>

          <div className="flex flex-col pt-[1.5rem] ">
            <h1 className="px-6 pb-[0.25rem] text-xs font-bold text-white uppercase text-opacity-60">
              {' '}
              Playlists
            </h1>
            <ul className="h-[40px]">
              <li className="px-2">
                <Menu.Item style={{ height: '40px', backgroundColor: 'black' }}>
                  <NavLink
                    to="likedSong"
                    className="flex items-center px-4 rounded-[4px] bg-[black] w-full"
                  >
                    Liked songs
                  </NavLink>
                </Menu.Item>
              </li>
            </ul>
            <div className="mx-6 separator"></div>
            <ul className="playlists ng-star-inserted">
              <li className="px-2">
                <Menu.Item style={{ height: '40px', backgroundColor: 'black' }}>
                  <a className="flex items-center px-4 rounded-[4px] bg-[black] w-full" href="#">
                    Danh sách phát của tôi #1
                  </a>
                </Menu.Item>
              </li>
            </ul>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default SiderBar;
