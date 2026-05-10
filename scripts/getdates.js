const currentyear = document.querySelector("#currentyear")
const today = new Date();
currentyear.innerHTML = today.getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;