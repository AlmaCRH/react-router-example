import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <div>I am the Header</div>
      <section>
        {/* Con el componente Outlet le estamos diciendo que cargue los componentes que especificamos en las rutas */}
        <Outlet />
      </section>
      <div>I am the Footer</div>
    </div>
  );
}

export default Root;
