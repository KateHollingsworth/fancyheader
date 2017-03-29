function changeActive (clickedOne) {
  var links = document.getElementsByTagName('a');
  for (var i=0; i < links.length; i++) {
    links[i].className = "notActive";
  }
    clickedOne.className = "active";
}
