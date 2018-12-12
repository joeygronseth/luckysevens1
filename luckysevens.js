

function resetForm() {
    
    document.forms["luckysevens"]["startingbet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    document.forms["luckysevens"]["startingbet"].focus();
}


function validateItems() {
    
    var initialvalue = document.forms["luckysevens"]["startingbet"].value;
    if (initialvalue == "" || isNaN(initialvalue)) {
        alert("Starting Bet must be filled in with a number.");
        document.forms["luckysevens"]["startingbet"]
           .parentElement.className = "form-group has-error";
        document.forms["luckysevens"]["startingbet"].focus();
        return false;
    }
	if (initialvalue == 0) {
        alert("Starting Bet value must be greater than zero.");
        document.forms["luckysevens"]["startingbet"]
           .parentElement.className = "form-group has-error";
        document.forms["luckysevens"]["startingbet"].focus();
        return false;
    }
	var currentvalue = initialvalue;
	var maxvalue = currentvalue;
	var bestroll = 0;
	var dice1;
	var dice2;
	var rollcount = 0;
	var win = 4;
	var loss = 1;
	while (currentvalue > 0) {
		dice1 = (Math.floor(Math.random() * 6) + 1);
		dice2 = (Math.floor(Math.random() * 6) + 1);
		rollcount++;
		if (dice1 + dice2 == 7) {
			currentvalue = currentvalue + win;
		} else {
			currentvalue = currentvalue - loss;
			}
		if (currentvalue >= maxvalue) {
			maxvalue = currentvalue;
			}
		if (currentvalue == maxvalue) {
			bestroll = rollcount;  
		}
}
	
	
   document.getElementById("results").style.display = "block";
   document.getElementById("tablestartingbet").innerText = "$" + initialvalue;
   document.getElementById("rollcount").innerText = rollcount;
   document.getElementById("maxvalue").innerText = "$" + Number(maxvalue);
   document.getElementById("bestroll").innerText = bestroll;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}

