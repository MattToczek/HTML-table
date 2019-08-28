
let linkArray = document.getElementsByClassName('link');

console.log(linkArray);

for (var i = 0; i < linkArray.length; i++) {
  let mailToLink = linkArray[i].innerHTML;
  linkArray[i].href = "mailto:" + mailToLink;
}
