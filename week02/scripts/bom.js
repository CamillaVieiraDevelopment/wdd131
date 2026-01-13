const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_______'); // Select the unordered list element

const li = document.createElement('li'); // Create a new list item element

const deleteButton = document.createElement('button'); // Create a delete button

li.textContent = input.value; // Set the text content of the list item to the input value
deleteButton.textContent = '❌'; // Set the text content of the delete button
li.append(deleteButton); // Append the delete button to the list item

<button aria-label="Close" id="close-button">❌</button>