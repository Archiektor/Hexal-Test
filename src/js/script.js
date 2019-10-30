/*
*
* */


let name, email, subject, text, correctEmail, correctSubject;

function validate() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    text = document.getElementById("comments").value;

    correctEmail = emailIsValid(email);
    correctSubject = subjectIsValid(subject);

    if (correctEmail && correctSubject) {
        console.log(`Your name is ${name} and your's email - ${email}`);
        console.log(`subject: ${subject} and text - ${text}`);
    } else {
        alert(`You form isn't correct`);
    }

}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function subjectIsValid(subject) {
    return subject.toString().length < 60
}