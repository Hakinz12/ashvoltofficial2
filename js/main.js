(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        nav.classList.remove('is-open');
      });
    });

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        nav.classList.remove('is-open');
      }
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // If an optional document has not been copied into /documents, show a clear message.
  document.querySelectorAll('.document-card').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (link.dataset.missing === 'true') {
        event.preventDefault();
        window.alert('Please add the official PDF to the documents folder first. See README.md for the expected filename.');
      }
    });
  });
})();
