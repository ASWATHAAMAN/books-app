import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {History, Science, WelcomePage} from "./components/Book";
import ErrorPage from "./Route/error.route";


const router = createBrowserRouter([
  {
    path: "",
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/history",
    element: <History />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/science",
    element: <Science />,
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
