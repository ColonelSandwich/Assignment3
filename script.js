// Initialize upon loading the window
window.onload = init;
function init() {
  getYearCurrent();
}

// Get the current year and set that to the maximum value for year
function getYearCurrent() {
  const d = new Date();
  document.getElementById("birth").max = d.getFullYear();
}

// Function that makes sure the form can be submitted correctly
function validateForm() {
  let namelist = ["Harry", "Elizabeth", "Shana"]
  let username = document.forms["page3form"]["username"].value;
  let pass1 = document.forms["page3form"]["password"].value;
  let pass2 = document.forms["page3form"]["reenter"].value;
  if (namelist.includes(username)) {
    alert("Username already exists!");
    return false;
  }
  if (pass1 != pass2) {
    alert("Passwords don't match!");
    return false;
  }
}