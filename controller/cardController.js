// controllers/cardController.js
const { collection } = require('../model/cardModel');

async function postCard(req, res) {
    try {
        await collection.insertOne(req.body);
        res.status(201).json({ message: 'Card added successfully' });
    } catch (err) {
        console.error('Error adding card:', err);
        res.status(500).json({ error: 'Failed to add card' });
    }
}

async function getAllCards(req, res) {
    try {
        const cards = await collection.find({}).toArray();
        res.json(cards);
    } catch (err) {
        console.error('Error fetching cards:', err);
        res.status(500).json({ error: 'Failed to fetch cards' });
    }
}

async function deleteCard(req, res) {
    const cardId = req.params.id;
    try {
        // Delete the card from the database
        const result = await collection.deleteOne({ _id: ObjectId(cardId) });
        if (result.deletedCount === 1) {
            res.json({ message: 'Card deleted successfully' });
        } else {
            res.status(404).json({ error: 'Card not found' });
        }
    } catch (err) {
        console.error('Error deleting card:', err);
        res.status(500).json({ error: 'Failed to delete card' });
    }
}

module.exports = { postCard, getAllCards, deleteCard };
