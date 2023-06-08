import Layout from "./components/Layout";

import "./globalStyles.css";

//configurando rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Monitoring from "./pages/MonitoringProcess";
import AvariasDetails from "./pages/avarias/index";

//Rotas para paginas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Monitoring />,
  },
  {
    path: "/grup/:id",
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
