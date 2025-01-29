function handleSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    console.log('Form data saved:', formData);

    document.getElementById('success-message').style.display = 'block';

    document.getElementById('feedback-form').reset();

    return false;
}
