import Card from '../models/card.js';

export const getVascosBetis = async (req, res) => {
    try {
        const card = await Card.find();
        res.status(200).json(card);
        // res.status(200).json({ message: 'Hello World' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


