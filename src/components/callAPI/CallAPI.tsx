import axios from 'axios';
import { useEffect, useState } from 'react';
import MusicCard from '../MusicCard/MusicCard';

const CallAPI = (props: any) => {
  const [token, setToken] = useState('');
  const [data, setData]: any = useState();

  useEffect(() => {
    const call = async () => {
      await axios
        .get(props.endpoint, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });

      if (localStorage.getItem('accessToken')) {
        setToken(localStorage.getItem('accessToken')!);
      }
    };

    call();
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

export default CallAPI;
