function validateForm() {
    console.log("ffmmf")
    var fname = document.forms["myForm"]["fname"].value;
    if (fname == "") {
        alert("First Name must be filled out");
        return false;
    }
     var lname = document.forms["myForm"]["lname"].value;
    if (lname == "") {
        alert("Last Name must be filled out");
        return false;
    }

    var email = document.forms["myForm"]["email"].value;
    if(!validateEmail(email)){
    	alert("Email not valid");
        return false;
    }

    var phonenumber = document.forms["myForm"]["phonenumber"].value;
    var sub = phonenumber.substring(0, 4);
    console.log(sub, "fkmfdmdkfk");
    if(sub !== '+234' || phonenumber.length !== 14){
        alert("Phone number must begin with +234 and must be 14 digits");
        return false;
    }
    
    function validateEmail(email) {
  		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return re.test(email);
	}
   
    
}