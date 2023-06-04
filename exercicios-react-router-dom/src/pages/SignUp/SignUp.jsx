import "./style.css";
import NavBar from "../../components/Navbar";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <NavBar />
      <section className="container c-sign-up">
        <h1>SignUp</h1>
        <div>
          <Link to="/dashboard">Entrar</Link>
        </div>
      </section>
    </>
  );
}
