import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUser } from "../../redux/actions";

const Element: React.FC = () => {
  const { error, isLoading, users } = useAppSelector((st) => st.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <h1>HIII</h1>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>LOAD</h1>}
      <ul>
        {users?.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Element;
