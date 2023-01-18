function validateForm() {
    // Get the input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the input fields are empty
    if (username == "" || password == "") {
        alert("Please fill in all fields");
        return false;
    } else {
        return true;
    }
}