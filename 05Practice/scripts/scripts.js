const list = document.querySelector('ul');
const input = document.querySelector('input'); 
const button = document.querySelector('button');

button.addEventListener('click', function() {
    //make sure the input is not blank before doing the following remaining tasks in this list
    const myItem = input.value;
    input.value = '';
    //create an li element
    const listItem = document.createElement('li');
    //create a delete button
    const listBtn = document.createElement('button');
    //
    //populate the li elements textContent or innerHTML with the input
    listItem.innerHTML = myItem;
    //populate the button textContent with an ❌
    listBtn.textContent = '❌';
    //append the li element with the delete button
    listItem.appendChild(listBtn);
    //append the list element with the li element just created and appended with text and the delete button
    list.appendChild(listItem);
    //
    //add an event listener to the delete button that removes the li element when clicked
    listBtn.addEventListener('click', function() {
        list.removeChild(listItem);
    });
    //send the focus to the input element
    input.focus();
    //change the input value to nothing or the empty string to clean up the interface for the user

});
