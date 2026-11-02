const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document
  .querySelectorAll(".nav-links a")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open")),
  );

const form = document.getElementById("contactForm");
const fields = {
  name: {
    el: document.getElementById("name"),
    error: document.getElementById("nameError"),
    valid: (v) => v.trim().length >= 2,
  },
  email: {
    el: document.getElementById("email"),
    error: document.getElementById("emailError"),
    valid: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  },
  message: {
    el: document.getElementById("message"),
    error: document.getElementById("messageError"),
    valid: (v) => v.trim().length >= 10,
  },
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  Object.values(fields).forEach((f) => {
    const valid = f.valid(f.el.value);
    f.error.style.display = valid ? "none" : "block";
    f.el.style.borderColor = valid ? "#DCE0EA" : "#C33434";
    if (!valid) ok = false;
  });
  document.getElementById("success").style.display = ok ? "block" : "none";
  if (ok) form.reset();
});
