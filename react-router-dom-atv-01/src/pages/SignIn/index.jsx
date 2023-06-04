import "./style.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <section>
      <h1>SignIn</h1>
      <Link to="/dashboard">Entrar</Link>
    </section>
  );
}
