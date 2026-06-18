const loaderElem = document.querySelector('.loader')

window.addEventListener('load', function () {
    //first way
    // loaderElem.classList.add('hidden')

    // second way
    loaderElem.className += ' hidden' // class="loader hidden"

})

function scrollToContent() {
  // This scrolls the window down by the height of the viewport (100vh)
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
  // Toggle the 'active' class on the menu
  navMenu.classList.toggle('active');
  
  // Optional: Change icon from 'bars' to 'X'
  const icon = mobileMenu.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-list li a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
