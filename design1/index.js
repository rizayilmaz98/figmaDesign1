// Password input type change 
const changePasswwordTypeButton = document.querySelector('.img-password');
const passwordType = document.querySelector('#input-password');
changePasswwordTypeButton.addEventListener('click',typePassword);
function typePassword(){
    if(passwordType.type==='password'){
        console.log("girdi");
        passwordType.type ='text'
    } else{
        passwordType.type ='password'
    }
}