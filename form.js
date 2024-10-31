let form= document.querySelector("form");

let nameRegex =/^[A-Z][a-z]{2,}$/
let fnameField= document.querySelector(".firstname");
let lnameField= document.querySelector(".lastname");

fnameField.addEventListener("input", function(){
    let fnameTest= nameRegex.test(fnameField.value);
    let output = fnameField.parentElement.querySelector(".output");
    if(!fnameTest){
        output.innerHTML=`
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  firstname must start with capital letter </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  only letters </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  have no space </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  more than 2 letters</li>
        `
    }else{
        output.innerHTML=`<li class="valid-text"> <i class="fa-solid fa-circle-check"></i> valid name </li>`

    }

})
lnameField.addEventListener("input", function(){
    let lnameTest= nameRegex.test(lnameField.value);
    let output = this.parentElement.querySelector(".output");
    if(!lnameTest){
        output.innerHTML=`
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  lastname must start with capital letter </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  only letters </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  have no space </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  more than 2 letters</li>
        `
    }else{
        output.innerHTML=`<li class="valid-text"> <i class="fa-solid fa-circle-check"></i> valid name </li>`

    }

})

let phoneRegex = /^(01)\d{9}$/
let phoneField= document.querySelector(".phone");
phoneField.addEventListener("input", function(){
    let phoneTest= phoneRegex.test(phoneField.value);
    let output = this.parentElement.querySelector(".output");
    if(!phoneTest){
        output.innerHTML=`
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  phone number must start with 010 or 011 or 015 or 012 </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  only 11 digit </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  have no space </li>
        `
    }else{
        output.innerHTML=`<li class="valid-text"> <i class="fa-solid fa-circle-check"></i> valid phone number </li>`

    }

})

let birthdateRegex= /^\d{4}\/\d{2}\/\d{2}$/
let birthdateField= document.querySelector(".birthdate");
birthdateField.addEventListener("input", function(){
    let birthdateTest= birthdateRegex.test(birthdateField.value);
    let output = this.parentElement.querySelector(".output");
    if(!birthdateTest){
        output.innerHTML=`
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  birthdate must be with this form yyyy/mm/dd </li>

        `
    }else{
        output.innerHTML=`<li class="valid-text"> <i class="fa-solid fa-circle-check"></i> valid birthdate </li>`
    }

})

let emailRegex=/^[a-z][A-Za-z0-9%+@]{0,20}(@gmail.com)$/
let emailField= document.querySelector(".email");
emailField.addEventListener("input", function(){
    let emailTest= emailRegex.test(emailField.value);
    let output = this.parentElement.querySelector(".output");
    if(!emailTest){
        output.innerHTML=`
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  email must start with small letter </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  have only letter,numbers and special chars like[%+@] </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  have no space </li>

        `
    }else{
        output.innerHTML=`<li class="valid-text"> <i class="fa-solid fa-circle-check"></i> valid email </li>`
    }

})


let passwordRegex=/^\w{8}$/
let passwordField= document.querySelector(".password");
let passwordFlag=false;
passwordField.addEventListener("input", function(){
    let passwordTest= passwordRegex.test(passwordField.value);
    let output = this.parentElement.querySelector(".output");

    if(!passwordTest){
        output.innerHTML=`
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  password must include 8 characters letters and digits </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  have no space </li>

        `
    }else{
        passwordFlag=true;
        output.innerHTML=`<li class="valid-text"> <i class="fa-solid fa-circle-check"></i> valid password </li>`
    }

})

let passwordField2= document.querySelector(".password2");
passwordField2.addEventListener("input", function(){
    let confirmTest= passwordField.value===passwordField2.value;
    confirmPassword(confirmTest)

})

function confirmPassword(confirmTest){
    let output = passwordField2.parentElement.querySelector(".output");
    if(!confirmTest && passwordFlag){
        output.innerHTML=`
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  password doesn't match!!! </li>

        `
    }else{
        output.innerHTML=`<li class="valid-text"> <i class="fa-solid fa-circle-check"></i> password confirmed. </li>`
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let fnameTest= nameRegex.test(fnameField.value);
    let lnameTest= nameRegex.test(lnameField.value);
    let phoneTest= phoneRegex.test(phoneField.value);
    let birthdateTest= birthdateRegex.test(birthdateField.value);
    let emailTest= emailRegex.test(emailField.value);
    let passwordTest= passwordRegex.test(passwordField.value);

    if(fnameTest && lnameTest && phoneTest && birthdateTest&& emailTest&& passwordTest){

          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });

          window.location.href="./GetShop.html"
    }else{
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Please check your inputs and try again."
          });
    }

})

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });




