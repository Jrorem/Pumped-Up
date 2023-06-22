const express = require('express');
const { Progress } = require('../../models');
const { User } = require('../../models');

const router = express.Router();
let userId = {};
console.log(userId);


// Get all progress entries
router.get('/', async (req, res) => {
  console.log('HHHHEEEEEEEEYYYYYYYYYYYYYYYY');
  try {
    const userId = req.session.user_id; 
    const progress = await Progress.findAll({ where: { user_id: userId } });

    // Format the date for each progress entry
    const formattedProgress = progress.map((entry) => ({
      ...entry.toJSON(),
      date: new Date(entry.date).toLocaleDateString(), // Modify the formatting as needed
    }));

    res.status(200).json(formattedProgress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve progress entries' });
  }
});

// Create a new progress entry
router.post('/', async (req, res) => {
  try {
    const { weight, date } = req.body;
    const userId = req.session.user_id;

    const user = await User.findByPk(userId); 

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const progress = await user.createProgress({ weight, date }, { fields: ['weight', 'date'] });
    const formattedDate = new Date(progress.date).toLocaleDateString();
    res.status(201).json({ ...progress.toJSON(), date: formattedDate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create progress entry' });
  }
});

// Update a progress entry
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { weight, date } = req.body;
    const progress = await Progress.findByPk(id);
    if (!progress) {
      return res.status(404).json({ error: 'Progress entry not found' });
    }
    progress.weight = weight;
    await progress.save();
    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update progress entry' });
  }
});


// Delete a progress entry
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const progress = await Progress.findByPk(id);
    if (!progress) {
      return res.status(404).json({ error: 'Progress entry not found' });
    }
    await progress.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete progress entry' });
  }
});

module.exports = router;
