import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTodos } from "../services/todos";
import { TodoCard } from "../components/TodoCard";

export const Todos = () => {
  //Definimos un useState donde almacenaremos los datos de nuestra petición
  const [data, setData] = useState([]);

  useEffect(() => {
    //Creamos una función encargada de llamar a nuestro servicio, obtener todos los todos y guardarlos en data
    const getTodos = async () => {
      const todos = await getAllTodos();
      setData(todos);
    };
    //Llamamos a la función getTodos()
    getTodos();
  }, []);//Le decimos al useEffect que se ejecute únicamente cuando la página se cargue por primera vez

  //Creamos una función para renderizar nuestros todos
  const createReactTodos = () => {
    const cards = data.map((todo) => {
      return (
        /* En cada todo, le asignaremos un link para acceder a ese todo en concreto, haciendo uso de las rutas dinámicas */
        <Link key={todo.id} to={`/todos/${todo.id}`}>
          <TodoCard title={todo.title} />
        </Link>
      );
    });
    return cards;
  };
 //Llamamos a la función createReactTodos()
  return <div>{createReactTodos()}</div>;
};
