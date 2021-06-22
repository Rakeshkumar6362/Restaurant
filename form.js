

function validate(){
    var password = document.getElementById("password");
    // var small1 = document.getElementsbyId("spam");
    var small = document.getElementById("spam");
    var confirm = document.getElementById("confirm");
    var invalid = document.getElementById("invalid");

    x=document.getElementById("password").value;
    y=document.getElementById("confirm").value;

    if(x===y){
          
        
        confirm.classList.add("is-valid")
        small.classList.add("valid-feedback")    
        small.style.display="block"
        invalid.style.display="none";
        confirm.classList.remove("is-invalid");

        event.preventDefault();
    

    }
    else{
        
        confirm.classList.add("is-invalid");
        invalid.style.display="block";
        invalid.classList.add("invalid-feedback");
        small.style.display="none";
        confirm.classList.remove("is-valid");


        event.preventDefault();
        
    }

}
