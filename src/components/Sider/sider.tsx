import { Menu } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/image/Sider/logo';
import './sider.scss';
const SiderBar = () => {
  const token = localStorage.getItem('accessToken');
  const [data, setData]: any = useState();

  useEffect(() => {
    const call = async () => {
      await axios
        .get('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      // if (localStorage.getItem('accessToken')) {
      //   setToken(localStorage.getItem('accessToken')!);
      // }
    };

    call();
  }, [token]);
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
          <Menu.Item key="1">
            <NavLink to="/ReactJS_Spotify">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="search">Search</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="browse">Browse</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink key="4" to="playlist">
              My Playlists
            </NavLink>
          </Menu.Item>
          <Menu.Item key="5">
            <NavLink to="myAlbum">My Albums</NavLink>
          </Menu.Item>

          <div className="flex flex-col pt-[1.5rem] ">
            <h1 className="px-6 pb-[0.25rem] text-xs font-bold text-white uppercase text-opacity-60">
              {' '}
              Playlists
            </h1>
            <ul className="h-[40px]">
              <li className="px-2">
                <Menu.Item key="5" style={{ height: '40px', backgroundColor: 'black' }}>
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
            <ul className="playlists overflow-auto">
              {/* <li className="px-2">
                <Menu.Item style={{ height: '40px', backgroundColor: 'black' }}>
                  <a className="flex items-center px-4 rounded-[4px] bg-[black] w-full" href="#">
                    Danh sách phát của tôi #1
                  </a>
                </Menu.Item>
              </li> */}

              {data?.items
                ? data.items.map((item: any, index: any) => (
                    <div className="px-2 " key={index}>
                      <Menu.Item key="6" style={{ height: '40px', backgroundColor: 'black' }}>
                        <NavLink
                          className={`flex items-center px-4 rounded-[4px] bg-[black] w-full text-white`}
                          to={`playlist/${item.id}`}
                          state={{ Id: item.id }}
                        >
                          {item.name}
                        </NavLink>
                      </Menu.Item>
                    </div>
                  ))
                : null}
            </ul>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default SiderBar;
