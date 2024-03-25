let eyeIcon = document.querySelector("#passEye");
let passBox = document.querySelector("input[type='password']");
let emailBox = document.querySelector("#email-box");
let passErrorMsg = document.querySelector("#pass-error");
let emailErrorMsg = document.querySelector("#email-error");


function validateEmail(email){
    splitEmailAt = email.split("@");
    if(splitEmailAt.length == 2 && splitEmailAt[0].length >= 1 & splitEmailAt[1].length >= 1){
        splitEmailAtDot = splitEmailAt[1].split(".");
        if(splitEmailAtDot.length == 2 && splitEmailAtDot[0].length >= 1 && splitEmailAtDot[1].length >= 1){
            return true;
        }
    }
    return false;
}

eyeIcon.addEventListener("click", ()=>{
    if(passBox.type=="password"){
        passBox.type="text";
        eyeIcon.src="./res/images/closedeye.svg";
    } else {
        passBox.type="password";
        eyeIcon.src="./res/images/openeye.svg";
    }
})


function checkForm(e){
    passIsValid = false;
    emailIsValid = false;

    if(passBox.value.length < 8) {
        passErrorMsg.style.display = "block";
    } else {
        passErrorMsg.style.display = "none";
        passIsValid = true;
    }

    if(validateEmail(emailBox.value)){
        emailErrorMsg.style.display = "none";
        emailIsValid = true;
        
    } else {
        emailErrorMsg.style.display = "block";
    }

    if(passIsValid && emailIsValid){
        e.submit();
    }
}
    