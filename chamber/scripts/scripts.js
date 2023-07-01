let date = new Date();
let year = date.getFullYear();


let dateString = date.toDateString();
let dateLastModifiedLong = new Date(document.lastModified);
let dateLastModified = dateLastModifiedLong.toDateString();
document.getElementById("footer-info").innerHTML = `&copy ${year} San Diego Chamber | <strong>Seth McNabb</strong> | WDD 230 Project | last Modification: ${dateLastModified}`;
document.getElementById("header-info").innerHTML = `${dateString}`;


const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});


const dayOfWeek = date.getDay();
if (dayOfWeek ===1 || dayOfWeek ===2) {
	document.getElementById("banner").style.display='block' 
};

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
