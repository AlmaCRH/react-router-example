import { useEffect, useState } from "react";
import { getTodo } from "../services/todos";
import { TodoCard } from "../components/TodoCard";
import { useParams } from "react-router-dom";

export const Todo = () => {
  const { todoId } = useParams();
  //Haciendo uso de los parámetros que defifnimos en la ruta, accedemos al campo todoId, que contiene la id de nuestro todo seleccionado
  const [data, setData] = useState({});
  //Usamos el useState para guardar la información del todo seleccionado

  useEffect(() => {
    //Definimos una función encargada de llamar a la función getTodo() la cual le pasamos el id que recogemos de los parámetros, a continuación, guardamos la respuesta en data
    const getOneTodo = async () => {
      const response = await getTodo(todoId);
      setData(response);
    };
    getOneTodo();
  }, [todoId]);//Le especificámos al useEffect que se ejecute cada vez que cambie el valor de todoId (la id de nuestro todo pasada por parámtros)

  return (
    <div>
      {/* Le pasamos por props el título de nuestro todo selecionado */}
      <TodoCard title={data.title} />
    </div>
  );
};
