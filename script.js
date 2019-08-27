// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// function($) 
// {
// 	window.fnames = new Array(); 
// 	window.ftypes = new Array();
// 	fnames[0]='EMAIL';
// 	ftypes[0]='email';
// 	fnames[1]='FNAME';
// 	ftypes[1]='text';
// 	fnames[2]='LNAME';
// 	ftypes[2]='text';
// 	fnames[3]='ADDRESS';
// 	ftypes[3]='address';
// 	fnames[4]='PHONE';
// 	ftypes[4]='phone';
// 	fnames[5]='BIRTHDAY';
// 	ftypes[5]='birthday';
// }
// (jQuery));
// var $mcj = jQuery.noConflict(true);