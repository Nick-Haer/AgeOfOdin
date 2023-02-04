import express from 'express';
import meadify from "../middleware/meadified.js";

const router = express.Router();
router.route('/allMead/:meadType').get(meadify, async (req, res) => {
    console.log(req.params);
    try {
        res.status(200).json('billy bob')
    } catch (err) {
        res.status(400).json('oopsy daisy');
    }
})

export default router;