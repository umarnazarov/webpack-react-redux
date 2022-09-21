import React from "react";
import { postsApi } from "../../services/userService";

const Posts = () => {
  const { data } = postsApi.useFetchAllPostsQuery("");
  return <div>{data && data.map((d) => d.title)}</div>;
};

export default Posts;
