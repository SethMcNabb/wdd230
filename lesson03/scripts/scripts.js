let date = new Date();
let year = date.getFullYear();
let dateLastModified = new Date(document.lastModified);
document.getElementById("footer-info").innerHTML = `&copy ${year} | Seth McNabb | Last Updated ${dateLastModified}`;
