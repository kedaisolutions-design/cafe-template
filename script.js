(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Newsletter form — demo handler only.
  // REPLACE-PER-CLIENT: wire this up to a real email provider (Mailchimp, Brevo, etc.)
  // before launch. Keep the consent checkbox and the unsubscribe mention in the copy.
  var form = document.getElementById("newsletter-form");
  var status = document.getElementById("newsletter-status");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.querySelector("#nl-email");
      var consent = form.querySelector("#nl-consent");

      if (!email.value || !email.checkValidity()) {
        status.textContent = "Enter a valid email address.";
        status.removeAttribute("data-state");
        email.focus();
        return;
      }
      if (!consent.checked) {
        status.textContent = "Please confirm you're okay receiving emails from us.";
        status.removeAttribute("data-state");
        consent.focus();
        return;
      }

      status.textContent = "Thanks — you're on the list.";
      status.setAttribute("data-state", "ok");
      form.reset();
    });
  }
})();
