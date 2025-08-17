function getRelativePathToComponents() {
  const currentPath = window.location.pathname;
  const depth = currentPath.split('/').length - 2; // -2 to ignore leading and filename
  let prefix = '';
  for (let i = 0; i < depth; i++) {
    prefix += '../';
  }
  return prefix + 'components/';
}

document.addEventListener("DOMContentLoaded", () => {
  const basePath = getRelativePathToComponents();

  // Load Header
  fetch(basePath + 'header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  // Load Footer
  fetch(basePath + 'footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
