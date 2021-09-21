const username = document.getElementById("username");
const username_error = username.nextElementSibling;
const email = document.getElementById("email");
const email_error = email.nextElementSibling;
const password1 = document.getElementById("password1");
const password1_error = password1.nextElementSibling;
const password2 = document.getElementById("password2");
const password2_error = password2.nextElementSibling;
const form_element = document.getElementsByClassName("form-element");
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function out(){

    if(username.value.length < 3)
    username_error.style.visibility = "visible" ;
    else
    username_error.style.visibility = "hidden" ;

    if(email.value.match(validRegex))
    email_error.style.visibility = "hidden" ;
    else
    email_error.style.visibility = "visible" ;

    if(password1.value.length < 6)
    password1_error.style.visibility = "visible" ;
    else
    password1_error.style.visibility = "hidden" ;

    if(password1.value != password2.value || password2.length == 0)
    password2_error.style.visibility = "visible" ;
    else
    password2_error.style.visibility = "hidden" ;

    for(let i = 0 ; i < form_element.length ; i++)
    {
        if(form_element[i].lastElementChild.style.visibility == "visible")
            form_element[i].children[1].style.border = "1px solid red";
        else
            form_element[i].children[1].style.border = "1px solid green";

    }
}

const submit_button = document.getElementById("submit-btn-1");
submit_button.addEventListener('click',()=>setInterval(out,1));
// setInterval(out,1);