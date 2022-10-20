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

function drawText() {

  // Get the canvas
  var canvas = document.getElementById("p1canvas");

  // Make sure the canvas actually exists!
  if (canvas.getContext) {

    // use getContext to use the canvas for drawing
    var ctx = canvas.getContext("2d");

    // Set font
    ctx.font = "20px Comic Sans MS";

    // Fill with red
    ctx.fillStyle = "hotpink";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Center white text
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Now it is TEXT TIME!", canvas.width / 2, canvas.height / 2);
  }
}