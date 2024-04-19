import { RouterProvider } from "react-router-dom"; //Traemos RouterProvider, que es el objeto que nos permitirá navegar entre vistas
import router from "./router"; //importamos nuestro router
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} /> {/* Le especificámos que utilice nuestras rutas */}
    </>
  );
}

export default App;
