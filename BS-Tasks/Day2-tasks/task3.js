document.getElementById('loginSubmit').addEventListener('click', function () {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Save credentials in sessionStorage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);

    // Display username and password in the welcome section
    document.getElementById('displayUsername').textContent = sessionStorage.getItem('username');
    document.getElementById('displayPassword').textContent = sessionStorage.getItem('password');

    // Hide the login button and modal after submission
    document.getElementById('loginButton').classList.add('d-none');

    // Display only the welcome section
    document.getElementById('welcomeSection').classList.remove('d-none');

    // Close the modal
    var modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
});

document.getElementById('loginModal').addEventListener('show.bs.modal', function () {
    // Clear input fields when modal is opened
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
});

window.addEventListener('load', function () {
    const storedUsername = sessionStorage.getItem('username');
    const storedPassword = sessionStorage.getItem('password');

    // Check if credentials are stored in sessionStorage
    if (storedUsername && storedPassword) {
        // Display the stored username and password in the welcome section
        document.getElementById('displayUsername').textContent = storedUsername;
        document.getElementById('displayPassword').textContent = storedPassword;

        // Hide the login button and show the welcome section
        document.getElementById('loginButton').classList.add('d-none');
        document.getElementById('welcomeSection').classList.remove('d-none');
    }
});
