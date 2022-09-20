import "./index.css";

const MyPlayList = () => {
  return (
    <>
      <div className="block">
        <div className="common-grid">
          {/* call api */}
          <div className="contented max-h-[240px]">
            <a className="flex flex-col flex-1" href="#">
              <div className="media-cover">
                <div
                  className="mb-4 media-cover-2"
                  style={{
                    borderRadius: "initial",
                    backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273d1241debb8543af8322a7d6a)`,
                  }}
                ></div>
                <div className="play-button-overlay">
                  <div className="flex play-icon control-button large text-white bg-primary">
                    <div className="play-icon svgicon text-[1.5rem]">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="100%"
                        width="100%"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                      >
                        <path d="M4.018 14L14.41 8 4.018 2z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div _ngcontent-yvy-c84="" className="media-description">
                <div className="font-bold text-white ellipsis-one-line hover:text-white">
                  {" "}
                  Danh sách phát của tôi #1{" "}
                </div>
                <div className="text-description"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPlayList;
