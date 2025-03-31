document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // Name validation
    if (name.value.trim() === '') {
        showError(name, 'Name is required');
        isValid = false;
    } else {
        removeError(name);
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        showError(email, 'Valid email is required');
        isValid = false;
    } else {
        removeError(email);
    }

    // Message validation
    if (message.value.trim() === '') {
        showError(message, 'Message is required');
        isValid = false;
    } else {
        removeError(message);
    }

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message');
    input.classList.add('error');
    error.textContent = message;
}

function removeError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message');
    input.classList.remove('error');
    error.textContent = '';
}