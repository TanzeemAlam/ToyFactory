import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ViewBills from './Components/HeaderComponents/ViewBills';
import ViewCustomers from './Components/HeaderComponents/ViewCustomers';
import Home from './Components/Home';
import ViewProducts from './Components/HeaderComponents/ViewProducts';

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <> <Home /></> },
    { path: "/home", element: <><Home /></> },
    { path: "/products", element: <><ViewProducts /></> },
    { path: "/bills", element: <><ViewBills /></> },
    { path: "/customers", element: <><ViewCustomers /></> }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
