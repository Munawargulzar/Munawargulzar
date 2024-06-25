const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
document.getElementById('downloadButton').addEventListener('click', function() {
  var url = './app.pdf';
  var filename = 'app.pdf';
  
  // Create a new anchor element
  var anchor = document.createElement('a');
  
  // Set the href and download attributes
  anchor.href = url;
  anchor.download = filename;
  
  // Append the anchor element to the document's body
  document.body.appendChild(anchor);
  
  // Trigger a click event on the anchor element
  anchor.click();
  
  // Remove the anchor element from the document
  document.body.removeChild(anchor);
});