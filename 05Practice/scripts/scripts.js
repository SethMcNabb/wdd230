const list = document.querySelector('ul'); //variable for dom 'ul' element.
const input = document.querySelector('input'); //variable for user's input.
const button = document.querySelector('button'); //variable for functional button.

button.addEventListener('click', function() { //function to allow user to add, view, and delete data. 
    const myItem = input.value;
    input.value = '';
    if (myItem === '') {
        alert("Please enter a favorite BofM chapter")
    } else {
    const listItem = document.createElement('li');
    const listBtn = document.createElement('button');
    
    listItem.innerHTML = myItem;
    
    listBtn.textContent = '❌';
    listItem.appendChild(listBtn);
    list.appendChild(listItem);
    listBtn.addEventListener('click', function() {
        list.removeChild(listItem);
    });
    }
    input.focus();
});
