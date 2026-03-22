document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '56px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = '#09090b';
      links.style.padding = '1rem 2rem';
      links.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
      links.style.zIndex = '99';
    });
  }
});
