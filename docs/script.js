$( document ).ready(function() {
    const loginButton = $('#login-button');
    const logoutButton = $('#logout-button');

    loginButton.on('click', function(e) {
        e.preventDefault();
        const email = $('#email');
        const password = $('#password');
        let stop = false;
        if (email.val().trim() === '') {
            email.addClass('is-invalid');
            if (!$('#email-invalid-feedback').length) {
                jQuery('<div/>', {
                    "id": 'email-invalid-feedback',
                    "class": 'invalid-feedback',
                    "html": 'Please enter an email'
                }).insertAfter(email);
            }
            stop = true;
        } else {
            email.removeClass('is-invalid');
        }

        if (password.val().trim() === '') {
            password.addClass('is-invalid');
            if (!$('#passowrd-invalid-feedback').length) {
                jQuery('<div/>', {
                    "id": 'passowrd-invalid-feedback',
                    "class": 'invalid-feedback',
                    "html": 'Please enter a password'
                }).insertAfter(password);
            }
            stop = true;
        } else {
            password.removeClass('is-invalid');
        }
        if (stop) return;

        $('#login-panel').addClass('d-none');
        $('#welcome-panel').removeClass('d-none');

        email.val('');
        password.val('');
    });

    logoutButton.on('click', function(e) {
        $('#login-panel').removeClass('d-none');
        $('#welcome-panel').addClass('d-none');
    });

});
