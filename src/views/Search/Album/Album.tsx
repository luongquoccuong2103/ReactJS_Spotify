import Play from '../../../components/assets/image/MyAlbum/play';
import MusicCard from '../../../components/MusicCard/MusicCard';

import './Album.css';

const Album = (props: any) => {
  const url = 'https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d';
  return (
    <>
      <h2 className="mt-8 mb-4 text-heading">Album</h2>
      <div className="block">
        <div className="common-grid">
          {props.data?.albums.items.map((album: any, index: any) => (
            <MusicCard
              to={`../album/${album.id}`}
              id={album.id}
              url={album.images[0].url}
              img={<Play />}
              mediades={album.name}
              description={album.artists[0].name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Album;
