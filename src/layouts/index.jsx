import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <div>I am the Header</div>
      <section>
        <Outlet />
      </section>
      <div>I am the Footer</div>
    </div>
  );
}

export default Root;
