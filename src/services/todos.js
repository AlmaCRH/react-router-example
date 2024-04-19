import api from "./config";
//Creamos nuestro servicio para los Todos

export const getAllTodos = async () => {
  try {
    const { data } = await api.get("/todos");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async (id) => {
  try {
    const { data } = await api.get(`/todos/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
