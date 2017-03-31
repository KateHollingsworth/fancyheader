/** Below works, but is oldfashioned
function changeActive (clickedOne) {
  var links = document.getElementsByTagName('a');
  for (var i=0; i < links.length; i++) {
    links[i].className = "notActive";
  }
    clickedOne.className = "active";
}
**/

(function () {
  var nav = document.querySelector('nav');
  var links = document.querySelectorAll('li a');

  nav.addEventListener('click', eventHandler, false);

  function eventHandler (event) {
    for (let i=0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }
}())
