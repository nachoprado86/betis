import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const host = "mongo-beticos";
const port = "27017";
const database = "beticos_del_norte_2023";

const url = `mongodb://${host}:${port}/${database}`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a MongoDB');
}
).catch((err) => {
    console.log('Fallo de conexión para MongoDB', err);
}
);

export default mongoose;