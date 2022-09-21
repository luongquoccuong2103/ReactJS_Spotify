import './TopList.css';

const TopList = () => {
  return (
    <>
      <h2 className="mb-4 text-heading">Top Lists</h2>
      <div className="block">
        <div className="common-grid">
          {/* call api */}
          <div className="contented">
            <a className="flex flex-col flex-1" href="#">
              <div className="media-cover">
                <div
                  className="mb-4 media-cover-2"
                  style={{
                    borderRadius: 'initial',
                    backgroundImage: `url(https://i.scdn.co/image/ab67706f00000003e8641a419c367f9504f587aa)`
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
              {/* description */}
              <div className="font-bold text-white ellipsis-one-line hover:text-white">
                Today's Top Hits
              </div>
              <div className="text-description"> Nicki Minaj is on top of the Hottest 50! </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopList;
