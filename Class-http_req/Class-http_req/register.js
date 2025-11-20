function getData(event) {
  event.preventDefault();

  let email = $("#email").val();
  let password = $("#password").val();
  let name = $("#name").val();

  // let name = document.querySelector("#name").value.trim();
  // let email = document.querySelector("#email").value.trim();
  let phone = document.querySelector("#phone").value.trim();
  let country = document.querySelector("#country").value;
  // let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirm-password").value;
  let gender = document.querySelector("input[name='gender']:checked").value;

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let phonePattern = /^[0-9]{10}$/;
  let passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

  if (!name || !email || !phone || !country || !password || !confirmPassword) {
    alert("Please fill all the fields.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Enter a valid email.");
    return;
  }

  if (!phonePattern.test(phone)) {
    alert("Enter a valid 10-digit phone number.");
    return;
  }

  if (!passwordPattern.test(password)) {
    alert(
      "Password must include uppercase, lowercase, number, special char, 8–20 chars."
    );
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
  signUp(name, email, password);
  alert({
    name: name,
    email: email,
    phone: phone,
    gender: gender,
    country: country,
    password: password,
  });

  alert("Registration Successful!");
}

function signUp(name, email, password) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/signup");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    alert("Response:", JSON.parse(xhr.responseText));
  };
  const body = {
    fullname: name,
    email: email,
    password: password,
  };
  xhr.send(JSON.stringify(body));
}
