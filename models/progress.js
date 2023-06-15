class Progress {
  constructor(date, weight, bodyFatPercentage, measurements) {
    this.date = date;
    this.weight = weight;
    this.bodyFatPercentage = bodyFatPercentage;
    this.measurements = measurements;
    this.workouts = [];
  }

  // Add a workout to the progress
  addWorkout(workout) {
    this.workouts.push(workout);
  }

  // Remove a workout from the progress
  removeWorkout(workout) {
    const index = this.workouts.indexOf(workout);
    if (index !== -1) {
      this.workouts.splice(index, 1);
    }
  }
}

module.exports = Progress;
