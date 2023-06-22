const searchWorkout = document.getElementById('searchWorkout');
const workoutInput = document.getElementById('workout-search');
const workoutResults = document.getElementById('workout-results');
const instResults = document.getElementById('instructions')



const workoutSearch = async (event) => {
    event.preventDefault();
const input = workoutInput.value
console.log(input)

    if (input) {
        let options = {
            method: "GET",
            headers: { "X-Api-Key": "c6zYH9j97tY8e4IyXXNHfA==TrC4jZ68YEo2FrrD"}
        }
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${input}`, options);

            if(!response.ok) {
                throw new Error('Failed to fetch data from the API')
            }
                
            const data = await response.json()
            console.log(data);

            //adding code to specify data to use
            workoutResults.innerHTML = '';

            for (let i = 0; i < Math.min(data.length, 9); i++) {
                const workoutName = data[i].name;
                const workoutInst = data[i].instructions;
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = "workout";
                checkbox.value = workoutName;

                const label = document.createElement("label");
                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(workoutName));

                const container = document.createElement("div");
                container.appendChild(label);

                workoutResults.appendChild(container);

                // const workoutElement = document.createElement("p");
                // workoutElement.textContent = workoutName;
                // workoutElement.classList.add("workout-name");
                // workoutResults.appendChild(workoutElement);

                const instructionElement = document.createElement("p");
                instructionElement.textContent = workoutInst;
                instructionElement.classList.add("workout-instruction");
                workoutResults.appendChild(instructionElement);
            }
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch data from the API'});
        //    console.error(err);
           
    }
}
}



 searchWorkout.addEventListener("click", workoutSearch)