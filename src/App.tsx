import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Index, { action, loader } from "./routes/index";
import Layout, {  loader as layoutLoader } from "./routes/Layout";
import Next, { action as nextAction } from "./routes/next";

const router = createBrowserRouter([
  {
    loader: layoutLoader,
    element: <Layout />,
    children: [
      {
        action,
        loader,
        index: true,
        element: <Index />,
      },
      {
        path: "/day/next",
        action: nextAction,
        element: <Next />,
      },
    ]
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
