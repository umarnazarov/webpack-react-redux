import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { useAppSelector } from "./hooks/redux";

import { Link, Outlet } from "react-router-dom";

import { useAppDispatch } from "./hooks/redux";
import { fetchUser } from "./redux/actions";

const App: React.FC = () => {
  return (
    <div>
      <nav>IM NAV</nav>
      <Link to={"/thunk"}>GO TO FETCH USERS WITH REDUX TOOLKIT THUNK</Link>
      <br />
      <Link to={"/rtk"}>GO TO FETCH POSTS WITH REDUX TOOLKIT RTK</Link>
      <Outlet />
    </div>
  );
};

export default App;
