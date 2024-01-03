import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Novels, Literature, WelcomePage, Mystery, Horror} from "./components/Book";
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
    path: "/literature",
    element: <Literature />,
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
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
