import 'antd/dist/antd.css';
import ReactDOM from 'react-dom/client';
import './App.css';
import MainLayout from './views/Mainlayout';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AuthContext from './components/store/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  const token = localStorage.getItem('accessToken');

  // const handleLogin = () => {
  //   window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  // };

  return (
    <>
      <BrowserRouter>
        {/* <script src="https://sdk.scdn.co/spotify-player.js"></script>  */}
        <MainLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
