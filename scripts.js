/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded',function(){
    var email=document.getElementById("email");
    var button=document.getElementsByClassName("btn")[1];
    var message=document.getElementsByClassName("message")[0];
    button.addEventListener('click',function(event){
        event.preventDefault();
        if(email.value==""){
            message.innerHTML="Please enter a valid email address.";
        }
        else{
            message.innerHTML="Thank you! Your email address "+email.value+" has been added to our mailing list!";
        }
    });
        
});
