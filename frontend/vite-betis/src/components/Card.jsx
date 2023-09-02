


const Card = ({ card }) => {
    return (
        <article className="card">
            <h2>{card.Apodo}</h2>
            <p>{card.Nombre}</p>
            <p>{card.Apellidos}</p>
            <p>{card.Debut}</p>
            <p>{card.Futbolista}</p>
            <p>{card.Lugar}</p>
        </article>

    );
};

export default Card;