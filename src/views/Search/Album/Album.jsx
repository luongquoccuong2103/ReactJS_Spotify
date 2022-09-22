import Play from '../../../components/assets/image/MyAlbum/play';
import MusicCard from '../../../components/MusicCard/MusicCard';


import './Album.css';

const Album = () => {
  const url = 'https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d';
  return (
    <>
    <h2 _ngcontent-ijl-c94="" class="mt-8 mb-4 text-heading">
        Album
      </h2>
      <div className="block">
        <div className="common-grid">
          {/* call api */}
          <MusicCard url={url} img={<Play />} mediades={'POPSTAR'} description={'test'} />
          <MusicCard url={url} img={<Play />} mediades={'POPSTAR'} description={'test'} />
          <MusicCard url={url} img={<Play />} mediades={'POPSTAR'} description={'test'} />
          <MusicCard url={url} img={<Play />} mediades={'POPSTAR'} description={'test'} />
          <MusicCard url={url} img={<Play />} mediades={'POPSTAR'} description={'test'} />
          <MusicCard url={url} img={<Play />} mediades={'POPSTAR'} description={'test'} />
          <MusicCard url={url} img={<Play />} mediades={'POPSTAR'} description={'test'} />
          
        </div>
      </div>
    </>
  );
};

export default Album;
