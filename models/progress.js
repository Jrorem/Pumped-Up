const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Progress extends Model {}

Progress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      // Add the user_id column
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user", // Assuming the referenced table is named 'user'
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "progress",
  }
);

module.exports = Progress;

// SEE BELOW PREVIOUS CODE. THE ABOVE CODE IS FOR TESTING THE DATABASE. WE CAN ADD BELOW IF NEEDED!!

// class Progress {
//   constructor(date, weight, bodyFatPercentage, measurements) {
//     this.date = date;
//     this.weight = weight;
//     this.bodyFatPercentage = bodyFatPercentage;
//     this.measurements = measurements;
//     this.workouts = [];
//   }

//   // Add a workout to the progress
//   addWorkout(workout) {
//     this.workouts.push(workout);
//   }

//   // Remove a workout from the progress
//   removeWorkout(workout) {
//     const index = this.workouts.indexOf(workout);
//     if (index !== -1) {
//       this.workouts.splice(index, 1);
//     }
//   }
// }

// module.exports = Progress;
