const express = require('express');
const Progress = require('./progress');

const router = express.Router();

// Store progress data
const progressData = [];

// Get all progress entries
router.get('/progress', (req, res) => {
  res.json(progressData);
});

// Create a new progress entry
router.post('/progress', (req, res) => {
  const { date, weight, bodyFatPercentage, measurements } = req.body;
  const progress = new Progress(date, weight, bodyFatPercentage, measurements);
  progressData.push(progress);
  res.status(201).json(progress);
});

// Delete a progress entry
router.delete('/progress/:id', (req, res) => {
  const { id } = req.params;
  const index = progressData.findIndex(progress => progress.id === id);
  if (index !== -1) {
    progressData.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
