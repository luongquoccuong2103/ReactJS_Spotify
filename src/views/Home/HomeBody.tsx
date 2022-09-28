import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Play from '../../components/assets/image/MyAlbum/play';
import CallAPI from '../../components/callAPI/CallAPIPlaylist';
import MusicCard from '../../components/MusicCard/MusicCard';
import './HomeBody.scss';

const RECENTLYPLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played';

const HomeBody = (props: any) => {
  const [token, setToken] = useState('');
  const [data, setData]: any = useState();

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
          console.log(response.data.items);
        })
        .catch((error) => {
          console.log(error);
        });

      if (localStorage.getItem('accessToken')) {
        setToken(localStorage.getItem('accessToken')!);
      }
    };

    call();
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
            <MusicCard
              url="https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d"
              mediades="ok"
              description="kk"
              img={<Play />}
            />
            {data?.items.map((item: any) => (
              <>
                <MusicCard
                  key={item.track.id}
                  mediades={item.track.name}
                  description=""
                  url={item.track.album.images[0].url}
                />
              </>
            ))}
            {/* <CallAPI endpoint={RECENTLYPLAYED_ENDPOINT} /> */}
          </div>
        </div>
      </div>
      <div className="featured-playlists">
        <h2 className="mt-8 mb-4 text-heading">Ngủ ngon, mơ đẹp!.</h2>
        <div className="content-grid">
          <MusicCard
            url="https://i.scdn.co/image/ab67706f00000003cc785c1541d8b540da816688"
            mediades="ok"
            description="kk"
            img={<Play />}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeBody;
