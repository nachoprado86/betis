import connection from '../db/mongoose.js';


const CardSchema = new connection.Schema({
    debut: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    apodo: {
        type: String,
        required: true,
    },
    puesto: {
        type: String,
        required: true,
    },
    nacimiento: {
        type: String,
        required: true,
    }
});

const Card = connection.model('Card', CardSchema);

export default Card;