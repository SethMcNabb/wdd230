const input = document.querySelector('input'); 
const button = document.querySelector('button');
const list = document.querySelector('list');

button.addEventListener('click', function() {
    //make sure the input is not blank before doing the following remaining tasks in this list
    const myList = input.value;
    input.value = '';
    //create an li element
    const newLiElement = document.createElement('li');
    //create a delete button
    const newDeleteButton = document.createElement('button');
    //populate the li elements textContent or innerHTML with the input
    newLiElement.textContent(input);
    //populate the button textContent with an ❌
    newDeleteButton.textContent('❌');
    //append the li element with the delete button
    newLiElement.appendChild(newDeleteButton);
    //append the list element with the li element just created and appended with text and the delete button
    list.appendChild(newLiElement);
    button.textContent('Delete');
    //add an event listener to the delete button that removes the li element when clicked
    newDeleteButton.addEventListener('click'), function() {
        list.removeChild(newLiElement);
    }
    //send the focus to the input element
    input.focus();
    //change the input value to nothing or the empty string to clean up the interface for the user

});
