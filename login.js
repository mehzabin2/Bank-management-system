document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'mehzabin15-4688@diu.edu.bd' && password === 'mehzabin'){
        window.location.href = 'bank.html';
    }
    else{
        window.alert('Invalid user\nPlease! Enter your valid information');
    }

})