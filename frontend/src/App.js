import Layout from "./components/Layout";

import "./globalStyles.css";

//configurando rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Monitoring from "./pages/MonitoringProcess";
import AvariasDetails from "./pages/avarias/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Monitoring />,
  },
  {
    path: "/avarias/:id",
    element: <AvariasDetails />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
