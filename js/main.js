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


/* ASHVOLT Contract Address Copy Button */
(() => {
    const copyButton = document.getElementById("copy-contract");
    const status = document.getElementById("contract-copy-status");

    if (!copyButton || !status) return;

    copyButton.addEventListener("click", async () => {
        const address = copyButton.dataset.address;
        const label = copyButton.querySelector(".contract-copy__label");

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(address);
            } else {
                // Fallback for browsers that block Clipboard API
                const textarea = document.createElement("textarea");
                textarea.value = address;
                textarea.setAttribute("readonly", "");
                textarea.style.position = "fixed";
                textarea.style.left = "-9999px";

                document.body.appendChild(textarea);
                textarea.select();

                const copied = document.execCommand("copy");
                textarea.remove();

                if (!copied) {
                    throw new Error("Copy failed");
                }
            }

            if (label) {
                label.textContent = "ADDRESS COPIED!";
            }

            status.textContent =
                "Contract address copied successfully.";

            window.setTimeout(() => {
                if (label) {
                    label.textContent = "COPY ADDRESS";
                }
            }, 2000);

        } catch (error) {
            status.textContent =
                "Copy failed. Select the address above and copy it manually.";
        }
    });
})();


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
