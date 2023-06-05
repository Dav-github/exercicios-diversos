import "./style.css";
import logoCubos from "../../assets/logo-cubos.svg";
import backArrow from "../../assets/arrow-back.svg";
import { useNavigate, Link } from "react-router-dom";

export default function NavBar({ booleanArrow, setProfessorAtual }) {
  const navigate = useNavigate();

  function backToDashboard() {
    navigate("/dashboard");
    setProfessorAtual([]);
  }

  return (
    <nav>
      {booleanArrow && (
        <img
          src={backArrow}
          alt="arrow back"
          className="arrow-img"
          onClick={() => backToDashboard()}
        />
      )}
      <img src={logoCubos} alt="logo cubos" />
      <div className="container-sair">
        <Link to={"/"}>
          <p>Logout</p>
        </Link>
      </div>
    </nav>
  );
}
