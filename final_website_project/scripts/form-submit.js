// Get the form element
const form = document.getElementById('order-form');
// Add an event listener for the form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting to a new page
  
    // Get the input values from the form
    const firstName = document.getElementById('first-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const instructions = document.getElementById('instructions').value;

    // Increment the count of submitted forms
    let count = localStorage.getItem('juiceCount') || 0;
    count++;
    localStorage.setItem('juiceCount', count);

  
    // Get the date and time of the order
    const orderDate = new Date().toLocaleString();
  
    // Retrieve the fruit data from the API
    fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
      .then(response => response.json())
      .then(data => {
        // Calculate the total nutritions based on the selected fruits
        const totalNutritions = {
          carbohydrates: 0,
          protein: 0,
          fat: 0,
          calories: 0,
          sugar: 0,
        };
        const selectedFruits = [fruit1, fruit2, fruit3];
        data.forEach(fruit => {
          if (selectedFruits.includes(fruit.id.toString())) {
            totalNutritions.carbohydrates += fruit.nutritions.carbohydrates;
            totalNutritions.protein += fruit.nutritions.protein;
            totalNutritions.fat += fruit.nutritions.fat;
            totalNutritions.calories += fruit.nutritions.calories;
            totalNutritions.sugar += fruit.nutritions.sugar;
          }
        });
  
        // Format the output
        const output = `
          <h2>Order Summary</h2>
          <p><strong>Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Fruits:</strong> ${selectedFruits.join(', ')}</p>
          <p><strong>Special Instructions:</strong> ${instructions}</p>
          <p><strong>Order Date:</strong> ${orderDate}</p>
          <h3>Total Nutritions:</h3>
          <ul>
            <li>Carbohydrates: ${totalNutritions.carbohydrates.toFixed(2)}</li>
            <li>Protein: ${totalNutritions.protein.toFixed(2)}</li>
            <li>Fat: ${totalNutritions.fat.toFixed(2)}</li>
            <li>Calories: ${totalNutritions.calories.toFixed(2)}</li>
            <li>Sugar: ${totalNutritions.sugar.toFixed(2)}</li>
          </ul>
        `;
  
        // Display the output on the page
        const outputArea = document.getElementById('output-area');
        outputArea.innerHTML = output;
      })
      .catch(error => console.error(error));
  });