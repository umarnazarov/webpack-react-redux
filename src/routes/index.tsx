import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Element from "../components/Element";
import Posts from "../components/Posts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "thunk",
        element: <Element />,
      },
      {
        path: "rtk",
        element: <Posts />,
      },
    ],
    loader: async () => {
      return fetch("https://jsonplaceholder.typicode.com/users");
    },
    action: async ({ params, request }) => {
      let formData = await request.formData();
      return fetch("https://jsonplaceholder.typicode.com/todos/1");
    },
  },
]);
