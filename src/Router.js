import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import CreateResume from "./pages/CreateResume";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/Resume-builder/",
      element: <CreateResume />,
      errorElement: <ErrorPage />
    }
  ])

  return <RouterProvider router={router}/>
}

export default Router;
