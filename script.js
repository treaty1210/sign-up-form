//Query selector to check password matching
const body = document.querySelector("body");
const button = document.querySelector("button");
const password = document.querySelector("#password").value;
const confirm_pass = document.querySelector("#confirm_pass").value;
const error = document.querySelector(".error");

//Function to check matching
const match = button.addEventListener("click", () => {
    checkPass(password, confirm_pass)
    console.log(password ,confirm_pass)
})

//For empty password fields
if (password == "" && confirm_pass == "") {
    error.textContent = "*Password does not match!"
}

//Function that will check if value match
function checkPass(password, confirm_pass) {
    if (password !== confirm_pass) {
        error.textContent = "*Password does not match!"
    }
}