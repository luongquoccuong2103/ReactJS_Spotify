import 'antd/dist/antd.css';
import ReactDOM from 'react-dom/client';
import './App.css';
import MainLayout from './views/Mainlayout';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AuthContext from './components/store/auth-context';

const CLIENT_ID = 'fdb817872fb14108bb1802655f229199'; // insert your client id here from spotify
const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/ReactJS_Spotify';
const SPACE_DELIMITER = '%20';
const SCOPES = [
  'user-read-currently-playing',
  'user-read-playback-state',
  'playlist-read-private',
  'user-read-recently-played',
  'user-library-read'
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotifyAuth = (hash: any) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split('&');
  const paramsSplitUp = paramsInUrl.reduce((accumulater: any, currentValue: any) => {
    const [key, value] = currentValue.split('=');
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};
function App() {
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getReturnedParamsFromSpotifyAuth(
        window.location.hash
      );

      localStorage.clear();

      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('tokenType', token_type);
      localStorage.setItem('expiresIn', expires_in);
    }
  }, []);

  if (!token) {
    window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  }
  const handleLogin = () => {
    window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  };
  const authCtx = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        {/* {authCtx.isLoggedIn && <MainLayout />}
        {!authCtx.isLoggedIn && <Navigate to="/auth" />} */}
        <MainLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
