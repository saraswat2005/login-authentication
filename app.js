
let users = JSON.parse(localStorage.getItem('users')) || [];

// Handle login
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        // Redirect to the success page
        window.location.href = 'success.html';
    } else {
        document.getElementById('message').innerHTML = 'Invalid username or password!';
        document.getElementById('message').style.color = 'red';
    }
});

// Handle registration
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (users.some(user => user.username === newUsername)) {
        document.getElementById('registerMessage').innerHTML = 'User already exists! Please log in.';
        document.getElementById('registerMessage').style.color = 'red';
    } else {
        users.push({ username: newUsername, password: newPassword });
        // Save the updated users array to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('registerMessage').innerHTML = 'Registration successful! Please log in.';
        document.getElementById('registerMessage').style.color = 'green';
    }
});
