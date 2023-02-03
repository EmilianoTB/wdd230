
const inputField = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("#button-add");



button.addEventListener("click", function() {

    const li = document.createElement("li"); // variable const named li to creat with the object document (tree-like structure... reperesents HTML STRUCTURE)
    const delete_button = document.createElement("button");
    
    
    const enteredText = inputField.value; //enter input and display inside a <li> tag
    li.innerHTML = enteredText;
    delete_button.textContent = "❌" // to create innerHTML(property) inside the code you need the variable of the element created and add the text inside the object
    
    
    li.appendChild(delete_button); //append the li element with the delete button
    list.appendChild(li); //append the list element with the li element just created and appended with text and the delete button

   
    //add an event listener to the delete button that removes the li element when clicked
    delete_button.addEventListener("click", function() {

        list.removeChild(li);  //deletes only the selected li 

    });
  });

