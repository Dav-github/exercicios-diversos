import "./style.css";
import NavBar from "../../ components/NavBar";
import { teachers } from "../../data";
import { useState } from "react";
import Card1 from "../../ components/Card1";
import Card2 from "../../ components/Card2";
import { useParams, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [professores, setProfessores] = useState(teachers);
  const [professorAtual, setProfessorAtual] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClickCard({ professor }) {
    navigate(`/dashboard/${professor.id}`);
    setProfessorAtual(professor);
  }

  return (
    <section className="container">
      {!id ? (
        <div className="container-card1">
          <NavBar booleanArrow={false} />
          {professores.map((professor) => {
            return (
              <div
                key={professor.id}
                onClick={() => handleClickCard({ professor })}
              >
                <Card1 img={professor.avatar} nome={professor.name} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <NavBar booleanArrow={true} setProfessorAtual={setProfessorAtual} />
          <div className="flex">
            <Card2 professorEscolhido={professorAtual} />
          </div>
        </div>
      )}
    </section>
  );
}
