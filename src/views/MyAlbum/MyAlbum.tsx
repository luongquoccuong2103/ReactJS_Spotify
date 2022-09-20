import Play from "../../components/assets/image/MyAlbum/play";
import "./MyAlbum.css";

const MyAlbum = () => {
  return (
    <>
      <div className="block">
        <div className="common-grid">
          {/* call api */}
          <div className="contented max-w-[240px]">
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
                      <Play />
                    </div>
                  </div>
                </div>
              </div>
              <div _ngcontent-yvy-c84="" className="media-description">
                <div className="font-bold text-white ellipsis-one-line hover:text-white">
                  {" "}
                  POP/STARS{" "}
                </div>
                <div className="text-description">K/DA</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAlbum;
