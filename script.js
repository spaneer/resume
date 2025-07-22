// Toggle dark/light mode
document.getElementById('themeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Disable right-click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable copy
document.addEventListener('copy', function (e) {
  e.preventDefault();
});

// Disable selection
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});

// Disable Ctrl+C, Ctrl+X, Ctrl+A
document.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && ['c', 'x', 'a'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});
