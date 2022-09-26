import Play from '../../components/assets/image/MyPlayList/play';
import './MyPlayList.scss';
import { Routes, Route, Link } from 'react-router-dom';
import MusicCard from '../../components/MusicCard/MusicCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CallAPI from '../../components/callAPI/CallAPI';

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
