const searchWorkout = document.getElementById('searchWorkout')
const workoutInput = document.getElementById('workout-search')


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

            const workoutName = data[0].name;
            const workoutDataElement = document.getElementById("workout-name");
            workoutDataElement.textContent = workoutName;
            // return data;
          
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch data from the API'});
        //    console.error(err);
           
    }
}
}



 searchWorkout.addEventListener("click", workoutSearch)