import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestaurantMenu";
import Profile from "./components/profile";
import Shimmer from "./components/shimmer";
import Instamart from "./components/Instamart";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import Cart from "./components/cart";
import store from "../utils/store";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Naivedya Tripathi",
    email: "tripathi1303@gmail.com",
  });
  return (
    <Provider store={store}>
    <UserContext.Provider value={{
      user:user,
    }}>
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body user={{
          name: "Naivedya Tripathi",
          email: "tripathi1303@gmail.com",
        }} />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/Instamart",
        element: <Instamart />,
      },
      {
        path: "/Cart",
        element: <Cart/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
