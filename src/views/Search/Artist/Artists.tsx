import { data } from 'autoprefixer';
import React from 'react';
import ArtistCard from '../../../components/ArtistCard/ArtistCard';
import Play from '../../../components/assets/image/MyAlbum/play';
import MusicCard from '../../../components/MusicCard/MusicCard';

const Artists = (props: any) => {
  console.log(props.data.artists.items[0].id);
  return (
    <React.Fragment>
      <h2 className="mt-8 mb-4 text-heading">Artist</h2>
      <div className="common-grid">
        {props.data?.artists.items.map((artist: any, index: any) => (
          <ArtistCard
            key={index}
            to={`../artist/${artist?.id}`}
            id={artist?.id}
            url={artist.images[0]?.url}
            img={<Play />}
            mediades={artist?.name}
            description={artist?.type[0].toUpperCase() + artist?.type.substring(1)}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Artists;
