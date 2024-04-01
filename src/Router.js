import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import CreateResume from "./pages/CreateResume";
import DownloadResume from "./pages/DownloadResume";
import Themes from "./pages/Themes";
import HomePage from "./pages/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/Resume-builder",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/Resume-builder/Download",
      element: <DownloadResume />
    },
    {
      path: "/Resume-builder/Themes",
      element: <Themes />
    },
    {
      path: "/Resume-builder/Editor",
      element: <CreateResume />
    }
  ])

  return <RouterProvider router={router}/>
}

export default Router;
