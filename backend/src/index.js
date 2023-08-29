import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get ('/', (req, res) => {
    res.send('¡HOLA BÉTICOS DEL MUNDO!')
});

app.listen(3010, () => {
    console.log('Server Listening on port 3010')
});

