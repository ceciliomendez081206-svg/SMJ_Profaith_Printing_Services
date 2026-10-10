/* ==========================================================================
   SMJ Profaith Printing Services - Main JavaScript
   Features:
     1. Current year in footer
     2. Mobile navigation toggle
     3. Scroll-reveal animations
     4. Inquiry form validation (Contact Us page)
   ========================================================================== */

/* Wait until the HTML is fully loaded before running any code */
document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  setupMobileMenu();
  setupScrollReveal();
  setupInquiryForm();
});


/* --------------------------------------------------------------------------
   1. Footer year: keeps the copyright year current automatically
   -------------------------------------------------------------------------- */
function setCurrentYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}


/* --------------------------------------------------------------------------
   2. Mobile navigation: opens and closes the hamburger menu
   -------------------------------------------------------------------------- */
function setupMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu when a link is chosen (useful on mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}


/* --------------------------------------------------------------------------
   3. Scroll reveal: fades in sections as the visitor scrolls to them
   -------------------------------------------------------------------------- */
function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal");

  // Fallback for older browsers: show everything immediately
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);   // animate only once
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
}


/* --------------------------------------------------------------------------
   4. Inquiry form validation
   Checks required fields, email format, and phone format before submission.
   NOTE: This is front-end validation only. The form does not send email yet;
   a backend or form service (e.g., Formspree) would be needed for that.
   -------------------------------------------------------------------------- */
function setupInquiryForm() {
  const form = document.getElementById("inquiry-form");
  if (!form) return;

  const statusEl = document.getElementById("form-status");

  // Validation rules for each field
  const rules = {
    name: {
      validate: (value) => value.trim().length >= 2,
      message: "Please enter your name (at least 2 characters).",
    },
    email: {
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: "Please enter a valid email address.",
    },
    phone: {
      // Phone is optional, but if filled it must look like a Philippine number
      validate: (value) => {
        if (value.trim() === "") return true;
        return /^(\+?63|0)?9\d{9}$/.test(value.replace(/[\s-]/g, ""));
      },
      message: "Please enter a valid mobile number (e.g., 09XX XXX XXXX).",
    },
    service: {
      validate: (value) => value !== "",
      message: "Please select the service you need.",
    },
    details: {
      validate: (value) => value.trim().length >= 10,
      message: "Please describe your project (at least 10 characters).",
    },
  };

  // Show or clear the error message for one field
  function setFieldError(field, message) {
    const errorEl = document.getElementById(`${field.name}-error`);
    if (message) {
      field.classList.add("invalid");
      field.setAttribute("aria-invalid", "true");
      if (errorEl) errorEl.textContent = message;
    } else {
      field.classList.remove("invalid");
      field.removeAttribute("aria-invalid");
      if (errorEl) errorEl.textContent = "";
    }
  }

  // Check one field and return true when it is valid
  function validateField(field) {
    const rule = rules[field.name];
    if (!rule) return true;

    const isValid = rule.validate(field.value);
    setFieldError(field, isValid ? "" : rule.message);
    return isValid;
  }

  // Validate on blur so visitors see feedback right away
  Object.keys(rules).forEach((name) => {
    const field = form.elements[name];
    if (!field) return;

    field.addEventListener("blur", () => validateField(field));

    // Clear the error while the visitor is correcting the field
    field.addEventListener("input", () => {
      if (field.classList.contains("invalid")) validateField(field);
    });
  });

  // Handle submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validate every field; keep track of the first invalid one
    let firstInvalid = null;
    Object.keys(rules).forEach((name) => {
      const field = form.elements[name];
      if (field && !validateField(field) && !firstInvalid) {
        firstInvalid = field;
      }
    });

    if (firstInvalid) {
      statusEl.textContent = "Please correct the highlighted fields.";
      statusEl.className = "form-status error";
      firstInvalid.focus();
      return;
    }

    // All fields are valid: show a success message and reset the form.
    // Replace this block with a real submission (fetch / form service) later.
    statusEl.textContent = "Thank you! Your inquiry has been received. We will get back to you soon.";
    statusEl.className = "form-status success";
    form.reset();
  });
}
