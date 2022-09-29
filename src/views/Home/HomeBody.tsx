import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Play from '../../components/assets/image/MyAlbum/play';
import CallAPI from '../../components/callAPI/CallAPI';
import MusicCard from '../../components/MusicCard/MusicCard';
import './HomeBody.scss';

const RECENTLYPLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played';
const FEATUREDPLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/browse/featured-playlists';
const HomeBody = (props: any) => {
  const [token, setToken] = useState('');
  const [data, setData]: any = useState();
  const [featurePlaylist, setFeaturePlaylist]: any = useState();

  useEffect(() => {
    const call = async () => {
      await axios
        .get(RECENTLYPLAYED_ENDPOINT, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setData(response.data);
          
        })
        .catch((error) => {
          console.log(error);
        });

      if (localStorage.getItem('accessToken')) {
        setToken(localStorage.getItem('accessToken')!);
      }
    };

    const callFeaturePlaylist = async () => {
      await axios
        .get(FEATUREDPLAYLIST_ENDPOINT, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setFeaturePlaylist(response.data)
          // console.log(response.data.items);
        })
        .catch((error) => {
          console.log(error);
        });

      if (localStorage.getItem('accessToken')) {
        setToken(localStorage.getItem('accessToken')!);
      }
    };
    call();
    callFeaturePlaylist();
  }, [token]);



  return (
    <React.Fragment>
      <div className="greeting">
        <h2 className="text-3xl text-white">Good Morningg</h2>
        <h3 className="mt-3 text-white text-opacity-90">
          Thanks for visiting ReactJS Spotify. It was built with TailwindCSS and Ant-Design by
          DuatTQ and CuongLQ. Cheers 🍺
        </h3>
      </div>
      <div className="recently-played-list">
        <div className="recently-played">
          <h2 className="mt-8 mb-4 text-heading">Recently Played</h2>
          {/* <button >get recently played</button> */}

          <div className="content-grid">

            {data?.items.map((item: any, index: any) => (
              <>
                <MusicCard
                  albumId={item.track.album.id}
                  mediades={item.track.name}
                  description={item.track.album.artists[0].name}
                  url={item.track.album.images[0].url}
                  id={index}
                />
              </>
            ))}

          </div>
        </div>
      </div>
      <div className="featured-playlists">
        <h2 className="mt-8 mb-4 text-heading">{featurePlaylist?.message}</h2>
        <div className="content-grid">
        {featurePlaylist?.playlists.items.map((item: any, index: any) => (
              <>
                <MusicCard
                  key={item.name}
                  mediades={item.name}
                  description= {item.description}
                  url={item.images[0].url}
                />
              </>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeBody;
