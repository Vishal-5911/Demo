document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example validation (you can replace this with your actual logic)
    if (username === 'admin' && password === 'password') {
        document.getElementById('result').innerText = 'Login successful!';
    } else {
        document.getElementById('result').innerText = 'Invalid username or password.';
    }
});
