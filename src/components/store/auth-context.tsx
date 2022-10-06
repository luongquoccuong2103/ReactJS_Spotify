import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CLIENT_ID = 'b4801a8426bb49d7833fa732754e43c2'; // insert your client id here from spotify
const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/ReactJS_Spotify';
const SPACE_DELIMITER = '%20';
const SCOPES = [
  'user-read-currently-playing',
  'user-read-playback-state',
  'playlist-read-private',
  'user-read-recently-played',
  'user-library-read',
  'user-modify-playback-state'
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotifyAuth = (hash: any) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split('&');
  const paramsSplitUp = paramsInUrl.reduce((accumulater: any, currentValue: any) => {
    const [key, value] = currentValue.split('=');
    accumulater[key] = value;
    // console.log(value);
    return accumulater;
  }, {});

  return paramsSplitUp;
};

//

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: ''
});

export const AuthContextProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token: any =
    localStorage.getItem('accessToken') !== null ? localStorage.getItem('accessToken') : '';

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getReturnedParamsFromSpotifyAuth(
        window.location.hash
      );

      localStorage.clear();

      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('tokenType', token_type);
      localStorage.setItem('expiresIn', expires_in);
      setIsLoggedIn(true);
      window.location.href = REDIRECT_URL_AFTER_LOGIN;
    }
    // if (!window.location.hash) {
    //   window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    // }
  }, []);

  if (!window.location.hash && !token) {
    window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  }

  // if (!token) {
  //   window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  // }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        token: token
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
