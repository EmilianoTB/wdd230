// Fetch data from API
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(data => {
    // Get the select elements
    const fruit1Select = document.getElementById('fruit1');
    const fruit2Select = document.getElementById('fruit2');
    const fruit3Select = document.getElementById('fruit3');

    // Remove all options from the select elements
    fruit1Select.innerHTML = '';
    fruit2Select.innerHTML = '';
    fruit3Select.innerHTML = '';

    // Loop through the data and create an option for each fruit
    data.forEach(fruit => {
      // Create an option element
      const option = document.createElement('option');

      // Set the value and text of the option
      option.value = fruit.id;
      option.textContent = `${fruit.genus} ${fruit.name}`;

      // Add the option to all select elements
      fruit1Select.appendChild(option.cloneNode(true));
      fruit2Select.appendChild(option.cloneNode(true));
      fruit3Select.appendChild(option.cloneNode(true));
    });

    // Add event listeners to the select elements
    fruit1Select.addEventListener('change', () => {
      // Remove the selected option from the other select elements
      const selectedValue = fruit1Select.value;
      removeOptionFromSelect(fruit2Select, selectedValue);
      removeOptionFromSelect(fruit3Select, selectedValue);
    });
    fruit2Select.addEventListener('change', () => {
      // Remove the selected option from the other select elements
      const selectedValue = fruit2Select.value;
      removeOptionFromSelect(fruit1Select, selectedValue);
      removeOptionFromSelect(fruit3Select, selectedValue);
    });
    fruit3Select.addEventListener('change', () => {
      // Remove the selected option from the other select elements
      const selectedValue = fruit3Select.value;
      removeOptionFromSelect(fruit1Select, selectedValue);
      removeOptionFromSelect(fruit2Select, selectedValue);
    });
  })
  .catch(error => {
    console.error(error);
  });

// Helper function to remove an option with a specific value from a select element
function removeOptionFromSelect(select, value) {
  const options = select.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === value) {
      select.removeChild(options[i]);
      break;
    }
  }
}


