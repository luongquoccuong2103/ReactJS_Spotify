import CallAPI from '../../components/callAPI/CallAPIPlaylist';
import './MyPlayList.scss';

const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists';

const MyPlayList = () => {
  return (
    <>
      <div className="block">
        <div className="common-grid">
          <CallAPI endpoint={PLAYLISTS_ENDPOINT} />
        </div>
      </div>
    </>
  );
};

export default MyPlayList;
