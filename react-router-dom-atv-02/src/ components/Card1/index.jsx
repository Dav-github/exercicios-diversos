import "./style.css";

export default function Card1({ img, nome }) {
  return (
    <section className="card1">
      <img src={img} alt="ft professor" />
      <span>{nome}</span>
    </section>
  );
}
