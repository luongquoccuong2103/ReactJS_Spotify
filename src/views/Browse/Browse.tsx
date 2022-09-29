import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Browse.scss';

const BodyBrowse = () => {
  const token = localStorage.getItem('accessToken');
  const [data, setData]: any = useState();

  useEffect(() => {
    const call = async () => {
      await axios
        .get('https://api.spotify.com/v1/browse/categories', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setData(response.data.categories);
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
    <>
      <div className="mb-6">
        <div className="common-grid">
          {/* noi dung sau de import API */}

          {data?.items
            ? data.items.map((item: any) => (
                <div>
                  <a className="flex relative ul" id="hv">
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${item.icons[0].url})`
                      }}
                    ></div>
                    <NavLink to={item.id} className="category-name ellipsis-one-line txunderline">
                      {item.name}
                    </NavLink>
                  </a>
                </div>
              ))
            : null}

          {/* {data.items.map((item: any) => (
            <div>
              <a className="flex relative ul" id="hv">
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${item.icons[0].url})`
                  }}
                ></div>
                <NavLink to="topList" className="category-name ellipsis-one-line txunderline">
                  {item.name}
                </NavLink>
              </a>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default BodyBrowse;
