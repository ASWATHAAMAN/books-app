import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Novels, WelcomePage, Mystery, Horror, Fantasy, Search} from "./components/Book";
import ErrorPage from "./Route/error.route";


const router = createBrowserRouter([
  {
    path: "",
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/novels",
    element: <Novels />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fantasy",
    element: <Fantasy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mystery",
    element: <Mystery />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/horror",
    element: <Horror />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <Search/>,
    errorElement: <ErrorPage />,
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
