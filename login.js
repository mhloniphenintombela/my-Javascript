var email = [];
var password = [];

function LogInHere() {
  var email = document.getElementById('uname').value;
  var password = document.getElementById('pass').value;

  if (email === "" && password === "") {
    alert("Password is empty");
  } else {
  }
  if (email == "user@gmail.com" && password == "mypassword") {
    window.location.href = "home.html"
  }
  else {
    alert("password is incorrect");
  }
}

