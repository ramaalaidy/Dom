  document.getElementById('registerBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields!');
    } else {
      alert('Registration successful!');
    }
  });
