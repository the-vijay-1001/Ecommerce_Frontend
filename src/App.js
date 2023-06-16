import logo from './logo.svg';
import './App.css';
import { Routes } from './route/index.js';
import { useRoutes } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
function RouteLayout({ path }) {
  console.log(path);
  const element = useRoutes(path);
  return element;
}

function App() {
  return (
    <RouteLayout path={Routes()} />
  );
}

export default App;
