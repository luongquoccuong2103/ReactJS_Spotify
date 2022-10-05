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
  const items = [
    {
      label: (
        <NavLink className="list" to="/ReactJS_Spotify">
          Home
        </NavLink>
      ),
      key: 'Home'
    },
    {
      label: (
        <NavLink className="list" to="/search">
          Search
        </NavLink>
      ),
      key: 'Search'
    },
    {
      label: (
        <NavLink className="list" to="/browse">
          Browse
        </NavLink>
      ),
      key: 'Browse'
    },
    {
      label: (
        <NavLink className="list" to="/playlist">
          My Playlists
        </NavLink>
      ),
      key: 'MyPlaylists'
    },
    {
      label: (
        <NavLink className="list" to="/myAlbum">
          My Albums
        </NavLink>
      ),
      key: 'My Albums'
    }
  ];
  return (
    <>
      <div className="">
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
          items={items}
        />
        <div className="flex flex-col pt-[1.5rem] ">
          <h1 className="px-6 pb-[0.25rem] text-xs font-bold text-white uppercase text-opacity-60">
            {' '}
            Playlists
          </h1>
          <ul className="h-[40px]">
            <li className="px-2">
              <div style={{ height: '40px', backgroundColor: 'black' }}>
                <NavLink
                  to="likedSong"
                  className="flex items-center px-4 rounded-[4px] bg-[black] w-full h-[40px]"
                >
                  Liked songs
                </NavLink>
              </div>
            </li>
          </ul>
          <div className="mx-6 separator"></div>
          <div className="playlists ">
            {data?.items
              ? data.items.map((item: any, index: any) => (
                  <div className="px-2 ">
                    <div style={{ height: '40px', backgroundColor: 'black' }}>
                      <NavLink
                        className={`flex items-center px-4 rounded-[4px] bg-[black] w-full text-white`}
                        to={`playlist/${item.id}`}
                        style={({ isActive }) =>
                          isActive ? { color: 'white' } : { color: '#b3b3b4' }
                        }
                        state={{ Id: item.id }}
                      >
                        {item.name}
                      </NavLink>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default SiderBar;
