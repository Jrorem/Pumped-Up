var apiNinjaKey = 'c6zYH9j97tY8e4IyXXNHfA==TrC4jZ68YEo2FrrD'

function workoutSearch(name, type, muscle, difficulty, offset) {
    var exerciseAPI = `https://api.api-ninjas.com/v1/exercise?`
    if (name) {
        exerciseAPI += `name=${name}&`
    }
    if (type) {
        exerciseAPI += `type=${type}&`
    }
    if (muscle) {
        exerciseAPI += `muscle=${muscle}&`
    }
    if (difficulty) {
        exerciseAPI += `difficulty=${difficulty}&`
    }
    if (offset) {
        exerciseAPI += `offset=${offset}&`
    }

    fetch(exerciseAPI, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiNinjaKey,
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                console.log('Request failed')
                throw new Error('Request failed');
            }
            return response.json();
        })
        // use the response to get the data
        .then(result => {
            if (result.length >= 0) {
                
                console.log(result);
            } else {
                console.log('No workout found in response.')
            }
        })
        .catch(error => {
            if (error) {
                console.error('Error:', error);
            }
        });
}

module.exports = workoutSearch;
