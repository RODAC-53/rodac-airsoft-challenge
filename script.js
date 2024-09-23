document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Form validation (basic)
    let teamName = document.getElementById('team-name').value;
    let captainName = document.getElementById('captain-name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let teamMembers = document.getElementById('team-members').value;

    if (teamName && captainName && email && phone && teamMembers) {
        alert("Thank you for registering, " + captainName + "! Your team, " + teamName + ", is now registered.");
    } else {
        alert("Please fill in all required fields.");
    }
});
