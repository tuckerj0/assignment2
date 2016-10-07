function validateForm(){

    var x = document.forms["myForm"]["Name"].value;
    if(x == null || x == ""){
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["Email"].value;
    if(y == null || y == ""){
        alert("Email must be filled out");
        return false;
    }
    var z = document.forms["myForm"]["Subject"].value;
    if(z == null || z == ""){
         alert("Subject must be filled out");
         return false;
    }
    var w = document.forms["myForm"]["Email"].value;
    if(w == null || w == ""){
        alert("Message is empty");
        return false;
    }
    var form = document.getElementById("hide");
    form.style.display = 'none';
    var thanks = document.getElementById("show");
    thanks.style.display = 'block';
    return false;
}

