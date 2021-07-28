$( document ).ready(function() {
    const loginButton = $('#login-button');
    const logoutButton = $('#logout-button');

    loginButton.on('click', function(e) {
        e.preventDefault();
        const email = $('#email');
        const password = $('#password');
        if (email.val().trim() === '' || password.val().trim() === '') {
            alert('Please enter your email and password.');
            return;
        }
        $('#login-panel').addClass('d-none');
        $('#welcome-panel').removeClass('d-none');
        console.log(email.val(), password.val());
        email.val('');
        password.val('');
    });

    logoutButton.on('click', function(e) {
        $('#login-panel').removeClass('d-none');
        $('#welcome-panel').addClass('d-none');
    });

});