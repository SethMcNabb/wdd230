let date = new Date();
let year = date.getFullYear();
let dateString = date.toDateString();
let dateLastModifiedLong = new Date(document.lastModified);
let dateLastModified = dateLastModifiedLong.toDateString();
document.getElementById("last-modified").innerHTML = `&copy ${year} Bountiful Fresh | last Modification: ${dateLastModified}`;
