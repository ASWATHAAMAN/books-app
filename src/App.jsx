import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {History, WelcomePage} from "./components/Book";


const router = createBrowserRouter([
  {
    path: "",
    element: <WelcomePage />,
  },
  {
    path: "/history",
    element:<History/>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
