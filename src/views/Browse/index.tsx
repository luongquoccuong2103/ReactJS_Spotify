import { NavLink } from 'react-router-dom';
import './index.scss';

const BodyBrowse = () => {
  return (
    <>
      <div className="mb-6">
        <div className="common-grid">
          {/* noi dung sau de import API */}

          <div>
            <a className="flex relative ul" id="hv">
              <div
                className="image"
                style={{
                  backgroundImage: `url(https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg)`
                }}
              ></div>
              <NavLink to="topList" className="category-name ellipsis-one-line txunderline">
                Top Lists
              </NavLink>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyBrowse;
