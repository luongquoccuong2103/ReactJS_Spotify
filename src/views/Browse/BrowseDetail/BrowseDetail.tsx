import Item from 'antd/lib/list/Item';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './BrowseDetail.scss';

import MusicCard from '../../../components/MusicCard/MusicCard';

const BrowseDetail = (props: any) => {
  const token = localStorage.getItem('accessToken');
  const [data, setData]: any = useState();
  // const [artist, setArtist]: any = useState();

  useEffect(() => {
    const call = async () => {
      await axios
        .get(
          'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFGvOw3O4nLAf/playlists?limit=50',
          {
            headers: {
              Authorization: 'Bearer ' + token
            }
          }
        )
        .then((response) => {
          setData(response.data.playlists);
          console.log(response.data.playlists);

          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    call();
  }, [token]);
  return (
    <div>
      <h2 className="mb-4 text-heading">Top Lists</h2>
      <div className="block">
        <div className="common-grid">
          {/* call api */}

          {data?.items
            ? data.items.map((item: any) => (
                // <div className="contented">
                //   <a className="flex flex-col flex-1" href="#">
                //     <div className="media-cover">
                //       <div
                //         className="mb-4 media-cover-2"
                //         style={{
                //           borderRadius: 'initial',
                //           backgroundImage: `url(${item.images[0].url})`
                //         }}
                //       ></div>
                //       <div className="play-button-overlay">
                //         <div className="flex play-icon control-button large text-white bg-primary">
                //           <div className="play-icon svgicon text-[1.5rem]">
                //             <svg
                //               viewBox="0 0 16 16"
                //               xmlns="http://www.w3.org/2000/svg"
                //               height="100%"
                //               width="100%"
                //               preserveAspectRatio="xMidYMid meet"
                //               focusable="false"
                //             >
                //               <path d="M4.018 14L14.41 8 4.018 2z"></path>
                //             </svg>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //     {/* description */}
                //     <div className="font-bold text-white ellipsis-one-line hover:text-white">
                //       {item.name}
                //     </div>
                //     <div className="text-description">{item.description}</div>
                //   </a>
                // </div>
                <MusicCard
                  key={item.id}
                  mediades={item.name}
                  description={item.description}
                  url={item.images[0].url}
                  to={`../playlist/${item.id}`}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default BrowseDetail;
