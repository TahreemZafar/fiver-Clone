import React from "react";
import "./App.scss";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";

function App() {

   const Layout = () => {
     return (
      <>
      <Navbar />
        <Outlet />
      <Footer />
      </>
     )
   }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:  <Home />
        },
        {
          path: "/gigs",
          element:  <Gigs />
        },
        {
          path: "/gig/:id",
          element:  <Gig />
        },
        {
          path: "/orders",
          element:  <Orders />
        },
        {
          path: "/mygigs",
          element:  <MyGigs />
        },
        {
          path: "/add",
          element:  <Add />
        },
        {
          path: "/messages",
          element:  <Messages />
        },
        {
          path: "/message/:id",
          element:  <Message />
        },
        {
          path: "/login",
          element:  <Login />
        },
        {
          path: "/register",
          element:  <Register />
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
