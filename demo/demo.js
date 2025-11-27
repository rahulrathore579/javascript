function getData(event) {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    //email=$("#email").val();
    //password=$("#password").val();

    console.log("email: " + email + " password: " + password);
    alert("email: " + email + " password: " + password);

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (email === "" || password === "") {
        alert("Please fill all the fields");
    }
    else if (!email.includes("@")) {
        alert("Email must contain '@'");
    }
    else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
    }
    else if (password.length < 8) {
        alert("Password must be at least 8 characters");
    }
    else {
        alert("Register Successful!");
    }


}

let form = document.querySelector("form");

form.addEventListener("submit", getData);