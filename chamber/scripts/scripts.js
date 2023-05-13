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