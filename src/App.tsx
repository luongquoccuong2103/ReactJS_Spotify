import 'antd/dist/antd.css';
import ReactDOM from 'react-dom/client';
import './App.css';
import MainLayout from './views/Mainlayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
