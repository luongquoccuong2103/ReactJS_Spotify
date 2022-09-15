import { Button, Menu, Dropdown } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import "antd/dist/antd.css";
import "./index.css";
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
  const playlist = [getItem("Liked songs", "6")];

  return (
    <Layout>
      <Sider
        width={232}
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="h-[100vh]">
          <div id="logo" className="px-[24px] mb-[16px] mt-[24px]">
            <span>
              <svg viewBox="0 0 1134 340" className="h-10 ng-star-inserted">
                <path
                  fill="white"
                  d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
                ></path>
              </svg>
            </span>
          </div>
          <Menu
            style={{ backgroundColor: "black", color: "white", border: "none" }}
            mode="inline"
          >
            {/* sau dung nav link de css chu */}
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Search</Menu.Item>
            <Menu.Item>Browse</Menu.Item>
            <Menu.Item>My Playlists</Menu.Item>
            <Menu.Item> My Albums</Menu.Item>
            <div className="text-white mt-[30px] mb-[16px] pl-[24px] font-bold text-transform:uppercase text-[0.75rem]">
              PLAYLISTS
            </div>
            <Menu.Item>Liked songs</Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout style={{ backgroundColor: "#2e2e2e" }}>
        <Header
          style={{
            backgroundColor: "#2e2e2e",
            display: "flex",
            height: "60",
          }}
        >
          <div className="flex">
            <button
              _ngcontent-bxa-c70=""
              title="Go back"
              className="mr-4 arrow-button"
            >
              <svg
                _ngcontent-bxa-c70=""
                role="img"
                focusable="false"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <polyline
                  _ngcontent-bxa-c70=""
                  points="16 4 7 12 16 20"
                  fill="none"
                  stroke="currentColor"
                ></polyline>
              </svg>
            </button>
            <button
              _ngcontent-bxa-c70=""
              title="Go forward"
              className="arrow-button"
            >
              <svg
                _ngcontent-bxa-c70=""
                role="img"
                focusable="false"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <polyline
                  _ngcontent-bxa-c70=""
                  points="8 4 17 12 8 20"
                  fill="none"
                  stroke="currentColor"
                ></polyline>
              </svg>
            </button>
          </div>
          <div className="user-social">
            <Button type="primary" className="ant-btn.btn-with-icon">
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
              <span className="ng-star-inserted">Support</span>
            </Button>
            <Button type="primary" className="ant-btn.btn-with-icon">
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
              <span className="ng-star-inserted">Jira Clone</span>
            </Button>

            <Button type="primary" className="ant-btn.btn-with-icon">
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
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z"></path>
              </svg>
              <span className="ng-star-inserted">Tweet</span>
            </Button>
            <Button type="primary" className="ant-btn.btn-with-icon">
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
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <span className="pl-2"> Source Code</span>
            </Button>
          </div>

          <div className="user-info">
            <Button className="user-upgrade" shape="round">
              Upgrade
            </Button>
            <div
              _ngcontent-dyf-c69=""
              nz-dropdown=""
              className="user-dropdown ant-dropdown-trigger"
            >
              <figure _ngcontent-dyf-c69="" className="w-7 h-7" title="Cường">
                <img
                  _ngcontent-dyf-c69=""
                  alt="User Profile"
                  className="rounded-img"
                  src="https://avatars.githubusercontent.com/u/66833983?s=200&amp;v=4"
                />
              </figure>
              <span
                _ngcontent-dyf-c69=""
                className="w-16 ml-2 text-xs text-white truncate"
              >
                Cường
              </span>
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
        </Header>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
