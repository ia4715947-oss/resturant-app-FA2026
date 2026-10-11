// Dishes - Iqra Asad - ia4715947@gmail.com - FA2026
const express = require('express');
const Dish = require('../models/Dish');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
  const dishes = await Dish.find().populate('user', 'name');
  res.json(dishes);
});

router.post('/', protect, async (req, res) => {
  const dish = await Dish.create({...req.body, user: req.user.id });
  res.status(201).json(dish);
});

router.delete('/:id', protect, async (req, res) => {
  await Dish.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted by Iqra Asad FA2026' });
});

module.exports = router;