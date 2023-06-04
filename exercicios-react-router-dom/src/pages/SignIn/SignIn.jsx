import "./style.css";
import NavBar from "../../components/Navbar";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <NavBar />
      <div className="container c-sign-in">
        <div className="div-sign-in">
          <div>
            <h2>Sign-in</h2>
            <ul className="lista">
              <li>
                <Link to="/dashboard">Entrar</Link>
              </li>
              <li>
                <Link to="/sign-up">Cadastre-se</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
