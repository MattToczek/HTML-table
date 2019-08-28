
let linkArray = document.getElementsByClassName('link');
const filterButton = document.createElement('button');
const filterInput = document.createElement('input');
const wrapperDiv = document.querySelector(".wrapper");
let search = filterInput.value.toUpperCase();

for (var i = 0; i < linkArray.length; i++) {
  let mailToLink = linkArray[i].innerHTML;
  linkArray[i].href = "mailto:" + mailToLink;
}

filterButton.innerHTML = "Filter";
filterInput.placeholder = "Enter Name";
wrapperDiv.appendChild(filterButton);
wrapperDiv.appendChild(filterInput);

filterButton.addEventListener('click', () => {
  let search = filterInput.value;

  if (search == '5') {
    console.log('done');
  }
  });
