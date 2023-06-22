const router = require("express").Router();
const fetch = require("node-fetch");
const { Workouts } = require("../../models");
const { Routines } = require("../../models");
const { User } = require("../../models");

router.get("/", async (req, res) => {
  let options = {
    method: "GET",
    headers: { "X-Api-Key": "c6zYH9j97tY8e4IyXXNHfA==TrC4jZ68YEo2FrrD" },
  };
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/exercises?muscle=biceps`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data from the API" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, type, muscle, difficulty } = req.body;
    const userId = req.session.user_id;
    const user = await User.findByPk(userId, { include: "routines" });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const routines = user.routines;
    if (routines.length === 0) {
      return res.status(404).json({ error: "User does not have any routines" });
    }
    const routineId = routines[0].routine_id;
    const routine = await Routines.findByPk(routineId);

    if (!routine) {
      return res.status(404).json({ error: "Routine not found" });
    }
    const workout = await Workouts.create({
      name,
      type,
      muscle,
      difficulty,
      routine_id: routineId,
    });
    console.log(workout);

    res.status(201).json(workout);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
