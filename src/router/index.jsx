import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import NotFound from "../pages/NotFound";
import Root from "../layouts";
import { Todos } from "../pages/Todos";
import { Todo } from "../pages/Todo";

//Creamos nuestro router, que contendrá las diferentes rutas de nuestra aplicación y se encargaŕa de renderizar cada vista.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, //Utilizamos nuestro layaout(plantilla) Root, para que se encargue de renderizar los componentes manteniendo una misma estructura en cada vista
    errorElement: <NotFound />,//En errorElement (opcional) le asignamos nuestra página de error, para que en caso de acceder a una ruta inexistente se renderice
    children: [ //Aquí defniremos las rutas que partirán de /
      {
        path: "/", //De base, diremos que / cargará home
        element: <Home />,
      },
      {
        path: "/about", //En el caso de acceder a la ruta /about, mostramos el componente About
        element: <About />,
      },
      {
        path: "/todos", //En esta ruta renderizamos el componente Todos
        element: <Todos />,
      },
      {
        path: "/todos/:todoId", //Y aquí, crearemos una ruta dinámica utilizando el parámetro todoId, para acceder a cada todo individualmente.
        element: <Todo />,
      },
    ],
  },
]);

export default router;
