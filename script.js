const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});




// Toggle mobile navigation
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('nav-links').classList.toggle('active');
});
