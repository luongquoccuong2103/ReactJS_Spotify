import "./index.css";

const LikedSong = () => {
  return (
    <>
      <div className="main-view">
        <div>
          <div className="content-spacing">
            <div className="imbg">
              <div
                className="media-cover-2"
                style={{
                  backgroundImage: `url(https://data.whicdn.com/images/315873335/original.jpg)`,
                }}
              ></div>
              <div className="flex flex-col">
                <h3 className="text-sm text-white uppercase">Playlist</h3>
                <h2 className="media-title ellipsis-one-line m-0">
                  Liked Songs
                </h2>
                <div className="mt-3 mb-2 text-description"></div>
                <div className="flex">
                  <div className="media-info">1 song</div>
                </div>
              </div>
            </div>

            <div>
              <div className="pb-4">
                <div className="playlist-tracks-header">
                  <div className="playlist-tracks-grid">
                    <div>#</div>
                    <div className="text-xs uppercase ellipsis-one-line">
                      Title
                    </div>
                    <div className="text-xs uppercase ellipsis-one-line">
                      Album
                    </div>
                    <div className="text-xs uppercase ellipsis-one-line">
                      Date added
                    </div>
                    <div
                      aria-hidden="true"
                      title="duration"
                      _nghost-xmp-c14=""
                      aria-label="clock-icon"
                      className="svg-icon-clock"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                      >
                        <path
                          d="M7.999 3h-1v5h3V7h-2V3zM7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 14A6.508 6.508 0 011 7.5C1 3.916 3.916 1 7.5 1S14 3.916 14 7.5 11.084 14 7.5 14z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              {/* insert api */}
              <div className='btn-hover'>
                <div className="playlist-tracks-grid track-row tracked hover:bg-[#B3B3B3] hover:bg-opacity-[30%] btn-hover ">
                  <div className="block">
                    <div className="flex group">
                      <div className="flex group-hover:hidden track-order">
                        <div className="text-description">1</div>
                      </div>
                      <div className="hidden pt-1 group-hover:block track-play-button">
                        <div className="flex">
                          <div className="play-icon svg-icon-play icon">
                            <svg
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              height="15.68"
                              width="15.68"
                              preserveAspectRatio="xMidYMid meet"
                              focusable="false"
                            >
                              <path d="M4.018 14L14.41 8 4.018 2z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="track-cover">
                      <div
                        className="media-cover-2"
                        style={{
                          backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273d1241debb8543af8322a7d6a)`,
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col">
                      <div className="ellipsis-one-line text-base text-white">
                        {" "}
                        POP/STARS{" "}
                      </div>
                      <div className="flex">
                        <a
                          className="text-description link-subtle ellipsis-one-line hover:underline"
                          href="#"
                        >
                          {" "}
                          K/DA{" "}
                        </a>
                        <span className="mr-1 comma-separator ng-star-inserted">
                          ,
                        </span>
                        <a
                          className="text-description link-subtle ellipsis-one-line hover:underline ng-star-inserted"
                          href="#"
                        >
                          {" "}
                          Madison Beer{" "}
                        </a>
                      </div>
                    </div>
                  </div>

                  <a
                    className="text-description link-subtle hover:underline"
                    href="#"
                  >
                    {" "}
                    POP/STARS{" "}
                  </a>

                  <div className="text-description"> Sep 19, 2022 </div>

                  <div className="text-description"> 3:11 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedSong;
