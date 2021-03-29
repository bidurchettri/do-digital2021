
function validateform()
{  
	//var passformat=  /^[A-Za-z]\w{7,14}$/;
	var pass1=document.regform.pass1.value; 
	var pass2=document.regform.pass2.value;

  	if (pass1!=pass2)
  	{  
  		alert("password does not match"); 
  		return false;  
	}
	else if(pass1.length<6)
	{  
  		alert("Password must be at least 6 characters long.");  
  		return false;  
  	}
  /*	else if(!(pass1.match(passformat))) 
  	{
  		alert("Password must range between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter");  
  		return false;  
  	}*/
  	
}  
 