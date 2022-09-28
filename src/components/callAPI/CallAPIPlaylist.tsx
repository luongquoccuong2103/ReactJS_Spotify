import axios from 'axios';
import { useEffect, useState } from 'react';
import MusicCard from '../MusicCard/MusicCard';

const CallAPI = (props: any) => {
  // const [token, setToken] = useState(localStorage.getItem('accessToken'));
  const token = localStorage.getItem('accessToken');
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
          console.log(response.data);
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
      {data?.items
        ? data.items.map((item: any) => {
            let url = '';
            if (item.images.length != 0) {
              url = item.images[0].url;
            } else {
              url = '';
            }
            return (
              <>
                <MusicCard
                  key={item.id}
                  mediades={item.name}
                  description={item.description}
                  url={url}
                  to={item.id}
                />
              </>
            );
          })
        : null}
    </>
  );
};

export default CallAPI;
