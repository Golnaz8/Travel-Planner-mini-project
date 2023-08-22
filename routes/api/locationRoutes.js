const router = require('express').Router();
const Location = require('../../models/Location');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new location
router.post('/', async (req, res) => {
  try {
    const locationData = await Location.create({
      name: req.body.location_name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET one location
router.get('/:id', async (req, res) => {
    try {
      const locationData = await Location.findByPk(req.params.id);
      if (!locationData) {
        res.status(404).json({ message: 'No location with this id!' });
        return;
      }
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // DELETE a location
  router.delete('/:id', async (req, res) => {
    try {
      const locationData = await Location.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!locationData) {
        res.status(404).json({ message: 'No location with this id!' });
        return;
      }
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  module.exports = router;