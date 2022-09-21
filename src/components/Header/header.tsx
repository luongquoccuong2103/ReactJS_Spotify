import { Button, Menu, Dropdown } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import './header.css';
import LeftArrowButton from '../assets/image/Header/leftArrowButton';
import RightArrowButton from '../assets/image/Header/rightArrowButton';
import CupStraw from '../assets/image/Header/cupStraw';
import HeartEyes from '../assets/image/Header/heartEyes';
import GitHub from '../assets/image/Header/gitHub';
import CaretDownFill from '../assets/image/Header/caretDownFill';
const HeaderBar = () => {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Profile
            </a>
          )
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              Remove Access
            </a>
          )
        }
      ]}
    />
  );
  return (
    <Header className="topbar">
      <div className="flex">
        <button _ngcontent-vgb-c70="" title="Go back" className="mr-4 arrow-button">
          <LeftArrowButton />
        </button>
        <button _ngcontent-vgb-c70="" title="Go forward" className="arrow-button">
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
        <Button type="primary" shape="round" className="user-upgrade">
          Upgrade
        </Button>
        <div _ngcontent-vgb-c69="" nz-dropdown="" className="user-dropdown ant-dropdown-trigger">
          <figure _ngcontent-vgb-c69="" className="w-6 h-6 pt-1 pl-1 " title="Cường">
            <img
              _ngcontent-vgb-c69=""
              alt="User Profile"
              className="rounded-2xl"
              src="https://avatars.githubusercontent.com/u/66833983?s=200&amp;v=4"
            />
          </figure>
          <span
            _ngcontent-vgb-c69=""
            className="w-15 h-7 pr-3 pt-1 pl-3 ml-2 text-xs text-white truncate"
          >
            Cường
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
