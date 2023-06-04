import "./style.css";
import Navbar from "../../components/Navbar";
import { Link, Outlet, useParams } from "react-router-dom";

export default function Dashboard() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <section className="container">
        <h1>Dash</h1>
        {id && <h2>id: {id}</h2>}
        <div>
          <Link to="/">Sair</Link>
        </div>
      </section>
      <Outlet />
    </>
  );
}
