import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {WelcomePage} from "./components/Book";

import { BookList } from "./components/Book";

const router = createBrowserRouter([
  {
    path: "",
    element: <WelcomePage />,
    children: [
      {
        path: "/",
        element: <BookList />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
