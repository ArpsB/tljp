$(document).ready(function() {

     function showError(error) {
        var message = "An error occurred";
        if (error.message) {
                message = error.message;
        } else if (error.errors) {
                var errors = error.errors;
                message = "";
                Object.keys(errors).forEach(function(k) {
                        message += k + ": " + errors[k] + "\n";
                });
        }

        alert(message);
}
     $('#signup-form').submit(function() {
        var firstname = $('#s_fname').val();
        var lastname = $('#s_lname').val();
        var email = $('#s_email').val();
        var password = $('#s_password').val();
        var cpassword = $('#s_cpassword').val();
        
        
        dpd.userinfo.post({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
        });
   
}) ;
});

   