import axios from 'axios';
import { useEffect, useState } from 'react';
import Play from '../../components/assets/image/MyAlbum/play';
import MusicCard from '../../components/MusicCard/MusicCard';
import './MyAlbum.scss';

const MyAlbum = () => {
  const url = 'https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d';

  const token = localStorage.getItem('accessToken');
  const [data, setData]: any = useState();

  useEffect(() => {
    const call = async () => {
      await axios
        .get('https://api.spotify.com/v1/me/albums', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setData(response.data);
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
      <div className="block">
        <div className="common-grid">
          {/* call api */}

          {data?.items
            ? data.items.map((item: any) => (
                <>
                  <MusicCard
                    key={item.album.id}
                    mediades={item.album.name}
                    description={item.album.artists[0].name}
                    url={item.album.images[0].url}
                  />
                </>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default MyAlbum;
