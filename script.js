document.getElementById('details-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var age = document.getElementById('age').value;
    var nickname = document.getElementById('nickname').value;
    var dob = document.getElementById('dob').value;

    // Correct answers
    var correctFirstName = "OLAIDE";
    var correctLastName = "AZEEZ";
    var correctAge = 49;
    var correctNickname = "YAYA";
    var correctDob = "1974-12-23";

    // Validate the details
    if (
        firstName.toUpperCase() !== correctFirstName ||
        lastName.toUpperCase() !== correctLastName ||
        parseInt(age) !== correctAge ||
        nickname.toUpperCase() !== correctNickname ||
        dob !== correctDob
    ) {
        alert("Incorrect details! Access denied.");
        return;
    }

    var fullName = firstName + " " + lastName;
    document.getElementById('user-name').innerText = fullName;
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('card').style.display = 'block';
});

function playAudio() {
    var audio = document.getElementById('audio');
    audio.play();
}
