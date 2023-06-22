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
            
            document.querySelector('.addbtn').style.display = 'block';

                
            for (let i = 0; i < Math.min(data.length, 9); i++) {
                const workoutName = data[i].name;
                const workoutInst = data[i].instructions;
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = "workout";
                checkbox.value = workoutName;
                checkbox.classList.add('routine');

                const label = document.createElement("label");
                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(workoutName));

                const container = document.createElement("div");
                container.appendChild(label);

                workoutResults.appendChild(container);

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

const routineClick = async (event) => {
    const checkbox = document.getElementsByClassName('routine');
    for(var i = 0; checkbox[i]; i++){
        if(checkbox[i].checked){
            const routine_name = checkbox[i].value;
            try {
                const response = await fetch('/api/routines', {
                  method: 'POST',
                  body: JSON.stringify({ routine_name }),
                  headers: { 'Content-Type': 'application/json' },
                });
                if (response.ok) {
                    console.log(`Successfully added routine}`);
                  } else {
                    alert('Failed to add routine');
                  }
                } catch (error) {
                  console.error('Error adding routine:', error);
                }    
        }
    }
}

document.querySelector('.addbtn').addEventListener("click", routineClick);

searchWorkout.addEventListener("click", workoutSearch);