import { Button, Menu, Dropdown } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import "antd/dist/antd.css";
import "./header.css";

const HeaderBar = () => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Profile
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Remove Access
            </a>
          ),
        },
      ]}
    />
  );
  return (
    <Header className="topbar">
      <div className="flex">
        <button
          _ngcontent-vgb-c70=""
          title="Go back"
          className="mr-4 arrow-button"
        >
          <svg
            _ngcontent-vgb-c70=""
            role="img"
            focusable="false"
            height="24"
            width="24"
            viewBox="0 0 24 24"
          >
            <polyline
              _ngcontent-vgb-c70=""
              points="16 4 7 12 16 20"
              fill="none"
              stroke="currentColor"
            ></polyline>
          </svg>
        </button>
        <button
          _ngcontent-vgb-c70=""
          title="Go forward"
          className="arrow-button"
        >
          <svg
            _ngcontent-vgb-c70=""
            role="img"
            focusable="false"
            height="24"
            width="24"
            viewBox="0 0 24 24"
          >
            <polyline
              _ngcontent-vgb-c70=""
              points="8 4 17 12 8 20"
              fill="none"
              stroke="currentColor"
            ></polyline>
          </svg>
        </button>
      </div>
      <div className="social-share">
        <Button type="primary" className="btn-with-icon ant-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-cup-straw"
            viewBox="0 0 16 16"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M13.902.334a.5.5 0 01-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 01-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 01-.524-.93L3.51 5.132A.78.78 0 013.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 01.303-.356l2.5-1a.5.5 0 01.65.278zM9.768 4.607A13.991 13.991 0 008 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 004.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 01-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 01-.435.127 8.88 8.88 0 01-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0l-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 00-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"></path>
          </svg>

          <span className="ng-star-inserted pl-2">Support</span>
        </Button>
        <Button type="primary" className="btn-with-icon ant-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-emoji-heart-eyes"
            viewBox="0 0 16 16"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z"></path>
            <path d="M11.315 10.014a.5.5 0 01.548.736A4.498 4.498 0 017.965 13a4.498 4.498 0 01-3.898-2.25.5.5 0 01.548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 001.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"></path>
          </svg>

          <span className="ng-star-inserted pl-2">Jira Clone</span>
        </Button>
        <Button type="primary" className="btn-with-icon ant-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-cup-straw"
            viewBox="0 0 16 16"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M13.902.334a.5.5 0 01-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 01-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 01-.524-.93L3.51 5.132A.78.78 0 013.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 01.303-.356l2.5-1a.5.5 0 01.65.278zM9.768 4.607A13.991 13.991 0 008 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 004.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 01-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 01-.435.127 8.88 8.88 0 01-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0l-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 00-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"></path>
          </svg>

          <span className="ng-star-inserted pl-2">Tweet</span>
        </Button>
        <Button type="primary" className="btn-with-icon ant-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>

          <span className="ng-star-inserted pl-2">Source</span>
        </Button>
      </div>
      <div className="user-info">
        <Button type="primary" shape="round" className="user-upgrade">
          Upgrade
        </Button>
        <div
          _ngcontent-vgb-c69=""
          nz-dropdown=""
          className="user-dropdown ant-dropdown-trigger"
        >
          <figure
            _ngcontent-vgb-c69=""
            className="w-6 h-6 pt-1 pl-1 "
            title="Cường"
          >
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
              height="100%"
              width="100%"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderBar;
