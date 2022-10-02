import Play from '../../../components/assets/image/MyAlbum/play';
import MusicCard from '../../../components/MusicCard/MusicCard';

import './Playlist.scss';

const Playlist = (props: any) => {
  return (
    <>
      <h2 className="mt-8 mb-4 text-heading">Playlist</h2>
      <div className="block">
        <div className="common-grid">
          {props.data?.playlists.items.map((playlist: any, index: any) => (
            <MusicCard
              to={`../playlist/${playlist?.id}`}
              id={playlist?.id}
              key={index}
              url={playlist?.images[0].url}
              img={<Play />}
              mediades={playlist?.name}
              description={playlist?.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Playlist;
