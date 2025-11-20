const REQUIRED = ["name", "email", "password", "confirm-password"];

// HTML elements
const form = document.querySelector("form");
const submitBtn = form.querySelector('[type="submit"]');
const errorMsg = document.querySelector("output");

submitBtn.disabled = true; // Start disabled

// Check if all fields are filled
form.addEventListener("input", () => {
  REQUIRED.every((field) => form[field].value.trim() !== "")
    ? (submitBtn.disabled = false)
    : (submitBtn.disabled = true);
});

// Intercept default submit event with custom event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  if (data.password === data["confirm-password"]) {
    return (errorMsg.textContent = "");
  }
  return (errorMsg.textContent = "Password verification failed");
});
