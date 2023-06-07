import "./style.css";

export default function Header({ name }) {
    return (
        <section className="header-container">
            <h1>{name}</h1>
        </section>
    );
}
