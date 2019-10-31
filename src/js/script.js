/* Check 3 variables
    “Name”: field.length > 1
    “Email”: pole musi być poprawnym adresem e-mail
    “Subject”: pole nie może zawierać więcej niż 60 znaków

    reset form
* */


let name, email, subject, text, arr, formPath;

formPath = document.getElementById("small_form");

arr = [];

function validate() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    text = document.getElementById("comments").value;

    arr.push(nameIsValid(name));
    arr.push(emailIsValid(email));
    arr.push(subjectIsValid(subject));

    checkAll(arr);

    formPath.reset();

}

// Check all fields for condition
function checkAll(arr) {
    if (arr.includes(false)) {
        alert('Somethin going wrong!')
    } else {
        // alert('All good')
    }
}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function subjectIsValid(subject) {
    return subject.toString().length < 60
}

function nameIsValid(name) {
    return name.toString().length >= 1
}