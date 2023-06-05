import "./style.css";

export default function Card2({ professorEscolhido }) {
  console.log(professorEscolhido);
  return (
    <section className="container-card2">
      <img src={professorEscolhido.avatar}></img>
      <span className="span-name">{professorEscolhido.name}</span>
      <span className="span-stack">{professorEscolhido.stack}</span>
      <div className="line"></div>
      <span className="bio">Bio</span>
      <p className="sobre">{professorEscolhido.bio}</p>
    </section>
  );
}
