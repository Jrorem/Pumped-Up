const express = require('express');
const router = express.Router();
const  { Routines } = require('../../models');

// Get all routines
router.get('/', async (req, res) => {
  try {
    const routines = await Routines.findAll();
    res.json(routines);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific routine by ID
router.get('/:id', async (req, res) => {
  try {
    const routine = await Routines.findByPk(req.params.id);
    if (!routine) {
      res.status(404).json({ error: 'Routine not found' });
    } else {
      res.json(routine);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new routine
router.post('/', async (req, res) => {

  // Routines.create(req.body).then ((dbResponse) => {
  //   if (dbResponse) {
  //     res.status(201).json(dbResponse)
  //   } else {
  //     console.log('problem')
  //   }
  // })
  console.log(req.body);
  try {
    const routine = await Routines.create(req.body);
    res.status(201).json(routine);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a routine
router.put('/:id', async (req, res) => {
  try {
    const routine = await Routines.findByPk(req.params.id);
    if (!routine) {
      res.status(404).json({ error: 'Routine not found' });
    } else {
      await routine.update(req.body);
      res.json(routine);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a routine
router.delete('/:id', async (req, res) => {
  try {
    const routine = await Routines.findByPk(req.params.id);
    if (!routine) {
      res.status(404).json({ error: 'Routine not found' });
    } else {
      await routine.destroy();
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
