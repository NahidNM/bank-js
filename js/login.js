// step : 1
document.getElementById('bnt-submit').addEventListener('click', function(){
//    step: 2
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step : 3 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // step : 4
     if( email === 'n@gmail.com' && password === '8010'){
        window.location.href = 'bank.html';
     }
     else{
        alert('correct pass and email');
     }
})