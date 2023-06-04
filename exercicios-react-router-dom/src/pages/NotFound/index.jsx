import "./style.css";
import notFoundImg from "../../assets/404-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);

  return (
    <section className="container">
      <h1>Error-404</h1>
      <h1>Cade a pagina que vc procurou...</h1>
      <img src={notFoundImg} alt="img not found meme" />
      <p>
        voltar para <Link to="/">sign-in</Link>
      </p>
    </section>
  );
}
