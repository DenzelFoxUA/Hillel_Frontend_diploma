
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Index";
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter(
  [{
    path: "/",
    element: <Layout/>,
    children:[
    {
        path: "/",
        element: <div>HOME</div>
    },
    {
        path: "/destinations",
        element: <div>Destinations</div>
    },
    {
        path: "/hotels",
        element: <div>Hotels</div>
    },
    {
        path: "/contacts",
        element: <div>Contacts</div>
    },
    {
        path: "*",
        element: <div>Not found 404</div>
    }]
  }]);

function App() {

  return (
  <Provider store = {store}>
      <ThemeProvider>
          <RouterProvider router = {router}/>
      </ThemeProvider>
  </Provider>
);
}

export default App
