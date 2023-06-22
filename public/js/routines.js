const routinesButton = document.getElementById("routines-btn");
const routinesList = document.getElementById("display-list");
const displayNameElement = document.getElementById("display-name");
const displayDescriptionElement = document.getElementById("display-description");
const enterRoutineNameElement = document.getElementById("routine-name");
const enterRoutineDescriptionElement = document.getElementById("routine-description");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/api/routines", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      const routines = data[data.length - 1];
      displayNameElement.textContent = `${routines.routine_name}`;
      displayDescriptionElement.textContent = `Description: ${routines.description}`;
    } else {
      console.error("Failed to retrieve routines data");
    }
  } catch (error) {
    console.error("Error retrieving routines data:", error);
  }
});

const addRoutine = async (event) => {
    event.preventDefault();

    const routineName = enterRoutineNameElement.value.trim();
    const routineDescription = enterRoutineDescriptionElement.value.trim();
    console.log(routineName, routineDescription);

    if (routineName && routineDescription) {
      try {
        const response = await fetch("/api/routines", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ routine_name: routineName, description: routineDescription }),
        });
        console.log(response);

        if (response.ok) {
            displayNameElement.textContent = `${routineName}`;
            displayDescriptionElement.textContent = `Description: ${routineDescription}`;
            console.log(`Successfully added routine: ${routineName}`);
        } else {
            alert("Failed to add routine");
        }

      } catch (error) {
        console.error("Error adding routine:", error);
      }
    } else {
        alert("Please enter routine name and description");
    }
};

routinesButton.addEventListener("click", addRoutine);