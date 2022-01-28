const email = [];
const password = [];

function LogInHere() {
  const email = document.getElementById('uname').value;
  const password = document.getElementById('pass').value;

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

