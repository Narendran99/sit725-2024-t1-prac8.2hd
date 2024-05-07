// routers/cardRouter.js
import express from "express";
import { geAlltCards, postCard, deleteCard } from "../controller/cardController.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

router.get('/api/cards', getAllCards);
router.post('/api/cards', postCard);

export default router;
