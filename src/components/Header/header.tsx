import { Button, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useNavigate } from 'react-router-dom';
import CaretDownFill from '../assets/image/Header/caretDownFill';
import CupStraw from '../assets/image/Header/cupStraw';
import GitHub from '../assets/image/Header/gitHub';
import HeartEyes from '../assets/image/Header/heartEyes';
import LeftArrowButton from '../assets/image/Header/leftArrowButton';
import RightArrowButton from '../assets/image/Header/rightArrowButton';
import './header.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
const HeaderBar = () => {
  const navigate = useNavigate();
  const [userData, setUserData]: any = useState();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    const call = async () => {
      await axios
        .get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setUserData(response.data);
          console.log(response);
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
    <Header className="topbar">
      <div className="flex">
        <button
          _ngcontent-vgb-c70=""
          title="Go back"
          className="mr-4 arrow-button"
          onClick={() => navigate(-1)}
        >
          <LeftArrowButton />
        </button>
        <button
          _ngcontent-vgb-c70=""
          title="Go forward"
          className="arrow-button"
          onClick={() => navigate(1)}
        >
          <RightArrowButton />
        </button>
      </div>
      <div className="social-share">
        <Button type="primary" className="btn-with-icon ant-btn">
          <CupStraw />

          <span className="ng-star-inserted pl-2">Support</span>
        </Button>
        <Button type="primary" className="btn-with-icon ant-btn">
          <HeartEyes />

          <span className="ng-star-inserted pl-2">Jira Clone</span>
        </Button>
        <Button type="primary" className="btn-with-icon ant-btn">
          <CupStraw />

          <span className="ng-star-inserted pl-2">Tweet</span>
        </Button>
        <Button type="primary" className="btn-with-icon ant-btn">
          <GitHub />

          <span className="ng-star-inserted pl-2">Source</span>
        </Button>
      </div>
      <div className="user-info">
        {/* <Button type="primary" shape="round" className="user-upgrade">
          Upgrade
        </Button> */}
        <div className="user-dropdown ant-dropdown-trigger">
          <figure className="w-6 h-6 pt-1 pl-1 " title="Cường">
            <img
              _ngcontent-vgb-c69=""
              alt="User Profile"
              className="rounded-2xl"
              src={userData?.images[0]?.url}
            />
          </figure>
          <span className="w-25 h-7 pr-3 pt-1.5 pl-3  text-xs text-white truncate">
            {userData?.display_name}
          </span>
          <div>
            <CaretDownFill />
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderBar;
