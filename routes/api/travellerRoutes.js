const router = require('express').Router();
const Traveller = require('../../models/Traveller');

// GET all travellers
router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new traveller
router.post('/', async (req, res) => {
  try {
    const travellerData = await Traveller.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET one traveller
router.get('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id);
    if (!travellerData) {
      res.status(404).json({ message: 'No traveller with this id!' });
      return;
    }
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a traveller
router.delete('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!travellerData) {
      res.status(404).json({ message: 'No traveller with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
