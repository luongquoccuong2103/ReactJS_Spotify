import Item from 'antd/lib/list/Item';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './BrowseDetail.scss';

import MusicCard from '../../../components/MusicCard/MusicCard';

const BrowseDetail = (props: any) => {
  const location = useLocation();
  const token = localStorage.getItem('accessToken');
  const [data, setData]: any = useState('');

  let a = location.state as any;
  const [info, setInfo]: any = useState({ browseId: a.browseId, browseName: a.browseName });

  const url =
    'https://api.spotify.com/v1/browse/categories/' + info.browseId + '/playlists?limit=20';

  useEffect(() => {
    const call = async () => {
      await axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setData(response.data.playlists);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    call();
  }, [location, token]);
  

  return (
    <div>
      <h2 className="mb-4 text-heading">{info.browseName}</h2>
      <div className="block">
        <div className="common-grid">
          {/* call api */}

          {data?.items
            ? data.items.map((item: any) => (
                <MusicCard
                  key={item.id}
                  mediades={item.name}
                  description={item.description}
                  url={item.images[0].url}
                  to={`../playlist/${item.id}`}
                  id={item.id}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default BrowseDetail;
