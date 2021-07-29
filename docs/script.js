$( document ).ready(function() {
    const loginButton = $('#login-button');
    const logoutButton = $('#logout-button');

    const addInvalidFeedback = (formElement, message) => {
        formElement.addClass('is-invalid');
        if (!$(`#${formElement.attr('id')}-invalid-feedback`).length) {
            jQuery('<div/>', {
                "id": `${formElement.attr('id')}-invalid-feedback`,
                "class": 'invalid-feedback',
                "html": message
            }).insertAfter(formElement);
        }
    };

    const removeInvalidFeedback = (formElement) => {
        formElement.removeClass('is-invalid');
        $(`#${formElement.attr('id')}-invalid-feedback`).remove();
    };

    loginButton.on('click', function (e) {
        e.preventDefault();
        const email = $('#email');
        const password = $('#password');
        let stop = false;
        if (email.val().trim() === '') {
            addInvalidFeedback(email, "Please enter an email");
            stop = true;
        } else {
            removeInvalidFeedback(email)
        }

        if (password.val().trim() === '') {
            addInvalidFeedback(password, "Please enter a password");
            stop = true;
        } else {
            removeInvalidFeedback(password);
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
