function passwordProtectedRedirect(targetUrl) {
    // Define the correct password
    const correctPassword = "superSecretPassword";

    // Prompt the user for a password
    const userPassword = prompt("Please enter the password:");

    // Check if the password is correct
    if (userPassword === correctPassword) {
        // Redirect to the target page
        window.location.href = targetUrl;
    } else {
        alert("Incorrect password. Access denied.");
    }
}