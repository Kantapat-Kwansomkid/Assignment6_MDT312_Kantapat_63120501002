window.onload = pageLoad;

function pageLoad()
{
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
      
    var pass1 = document.forms["myForm"]["password"];
    var pass2 = document.forms["myForm"]["repassword"];

    if(pass1.value == pass2.value)
    {
        alert("Register success!");
    }

    else if(pass1.value != pass2.value)
    {
        alert("Wrong password, Please try again!");
        return false;
    }

}