/* displaying current year by copywrite*/
let date = new Date();
let year = date.getFullYear();
console.log(year);
document.getElementById("current-year").innerHTML = `&copy; ${year} | Seth McNabb | Utah`;


/* displaying last date modified with js */
let dateLastModified = new Date(document.lastModified);
document.getElementById("last-modified").innerHTML = `Last Updated: ${dateLastModified}`;