
let linkArray = document.getElementsByClassName('link');
const filterButton = document.createElement('button');
const filterInput = document.createElement('input');
const wrapperDiv = document.querySelector(".wrapper");

for (var i = 0; i < linkArray.length; i++) {
  let mailToLink = linkArray[i].innerHTML;
  linkArray[i].href = "mailto:" + mailToLink;
}

filterButton.innerHTML = "Filter";
wrapperDiv.appendChild(filterButton);
wrapperDiv.appendChild(filterInput);
