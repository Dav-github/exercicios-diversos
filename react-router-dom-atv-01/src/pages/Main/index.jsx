import "./style.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <section>
      <h1>Main</h1>
      <Link to="/">Sair</Link>
    </section>
  );
}
