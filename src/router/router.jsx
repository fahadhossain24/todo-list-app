import { createBrowserRouter } from "react-router-dom";
import AppInitialLayout from "../ApplicationLayout/AppInitialLayout";
import Dashboard from "../pages/Dashboard";
import CreateNew from "../pages/CreateNew";
import NewTasks from "../pages/NewTasks";
import InProgress from "../pages/InProgress";
import Completed from "../pages/Completed";
import Canceled from "../pages/Canceled";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppInitialLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/create-new",
        element: <CreateNew />,
      },
      {
        path: "/new-tasks",
        element: <NewTasks />,
      },
      {
        path: "/in-progress",
        element: <InProgress />,
      },
      {
        path: "/completed",
        element: <Completed />,
      },
      {
        path: "/canceled",
        element: <Canceled />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
