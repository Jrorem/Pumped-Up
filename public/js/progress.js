const progressButton = document.getElementById('progress-btn');
const currentWeightElement = document.getElementById('current-weight');
const currentDateElement = document.getElementById('current-date');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/api/progress', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      const latestProgress = data[data.length - 1];
      currentDateElement.textContent = `Current Date: ${latestProgress.date}`;
      currentWeightElement.textContent = `Current Weight: ${latestProgress.weight}`;
    } else {
      console.error('Failed to retrieve progress data');
    }
  } catch (error) {
    console.error('Error retrieving progress data:', error);
  }
});


const progressHandler = async (event) => {
  event.preventDefault();

  const weight = document.getElementById('weight').value.trim();
  const date = document.getElementById('date').value.trim();
  console.log(weight);
  console.log(date);

  if (weight && date) {
    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        body: JSON.stringify({ weight, date }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        currentWeightElement.textContent = `Current Weight: ${weight}`;
        currentDateElement.textContent = `Current Date: ${date}`;
        console.log(`Successfully added progress: ${weight} and ${date}`);
      } else {
        alert('Failed to add progress');
      }
    } catch (error) {
      console.error('Error adding progress:', error);
    }
  } else {
    alert('Please enter a weight');
  }
};

progressButton.addEventListener('click', progressHandler);
