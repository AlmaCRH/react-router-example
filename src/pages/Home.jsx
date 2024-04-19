import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">
        <h1>Go to about</h1>
      </Link>
      <span>Hola bienvenido</span>
    </div>
  );
};
