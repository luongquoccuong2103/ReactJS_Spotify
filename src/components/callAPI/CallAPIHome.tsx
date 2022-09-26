import axios from 'axios';
import { useEffect, useState } from 'react';
import MusicCard from '../MusicCard/MusicCard';

const CallAPIHome = (props: any) => {
  const [token, selectedUserID] = useState('');
  const [data, setData]: any = useState();

  useEffect(() => {
    const getRecentPlayed = async () => {
      const response = await axios.get('https://api.spotify.com/v1/${d0d849f258c843ccb9695f91ec41400e}/playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
    };
    getRecentPlayed();
  }, [token]);

  return (
    <>
      {data?.items
        ? data.items.map((item: any) => (
            <>
              <MusicCard
                key={item.id}
                mediades={item.name}
                description={item.description}
                url={item.images[0].url}
              />
            </>
          ))
        : null}
    </>
  );
};

export default CallAPIHome;
