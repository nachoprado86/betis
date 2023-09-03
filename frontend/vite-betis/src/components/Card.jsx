


const Card = ({ card }) => {
    return (
        <article className="card">
            <h2>{card.apodo}</h2>
            <p>{card.nombre}</p>
            <p>{card.apellidos}</p>
            <p>{card.debut}</p>
            <p>{card.puesto}</p>
            <p>{card.nacimiento}</p>
        </article>

    );
};

export default Card;