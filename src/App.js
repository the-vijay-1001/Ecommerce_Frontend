import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, useRoutes } from 'react-router-dom';
import { Routes } from "./route"
import { Suspense } from 'react';

function RouteLayout({ path }) {
  console.log(path)
  return useRoutes(path);
}


function App() {

  return <>
    <Suspense>
      <RouteLayout path={Routes()} />
    </Suspense>
  </>
}

export default App;
