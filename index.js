var btnMemory8gb = document.getElementById("memory8gb");
var btnMemory16gb = document.getElementById("memory16gb");
var btnStorage128gb = document.getElementById("storage128gb");
var btnStorage256gb = document.getElementById("storage256gb");
var btnStorage512gb = document.getElementById("storage512gb");
var btnStorage1tb = document.getElementById("storage1tb");
var btnMemoryPressed = 0;
var btnStoragePressed = 0;

btnMemory8gb.addEventListener("click", function(){ 
	document.getElementById("memory8gb").style.border = "2px solid blue";
	document.getElementById("memory16gb").style.border = "1px solid gray";
	document.getElementById("memoryPrice8gb").style.visibility = "hidden";
	document.getElementById("memoryPrice16gb").innerHTML = "+ $200.00";
	document.getElementById("memoryPrice16gb").style.visibility = "visible";
	switch (btnStoragePressed) {
		case 0:
			document.getElementById("totalPrice").innerHTML = "$1,099.00   ";
			break;
		case 1:
			document.getElementById("totalPrice").innerHTML = "$1,299.00   ";
			break;
		case 2:
			document.getElementById("totalPrice").innerHTML = "$1,499.00   ";
			break;
		case 3:
			document.getElementById("totalPrice").innerHTML = "$1,699.00   ";
			break;	
	}
	btnMemoryPressed = 0;
});

btnMemory16gb.addEventListener("click", function(){ 
	document.getElementById("memory16gb").style.border = "2px solid blue";
	document.getElementById("memory8gb").style.border = "1px solid gray";
	document.getElementById("memoryPrice16gb").style.visibility = "hidden";
	document.getElementById("memoryPrice8gb").innerHTML = "- $200.00";
	document.getElementById("memoryPrice8gb").style.visibility = "visible";
	switch (btnStoragePressed) {
		case 0:
			document.getElementById("totalPrice").innerHTML = "$1,299.00   ";
			break;
		case 1:
			document.getElementById("totalPrice").innerHTML = "$1,499.00   ";
			break;
		case 2:
			document.getElementById("totalPrice").innerHTML = "$1,699.00   ";
			break;
		case 3:
			document.getElementById("totalPrice").innerHTML = "$1,899.00   ";
			break;	
	}
	btnMemoryPressed = 1;
});

btnStorage128gb.addEventListener("click", function(){ 
	document.getElementById("storage128gb").style.border = "2px solid blue";
	document.getElementById("storage256gb").style.border = "1px solid gray";
	document.getElementById("storage512gb").style.border = "1px solid gray";
	document.getElementById("storage1tb").style.border = "1px solid gray";
	document.getElementById("storagePrice128gb").style.visibility = "hidden";
	document.getElementById("storagePrice256gb").innerHTML = "+ $200.00";
	document.getElementById("storagePrice256gb").style.visibility = "visible";
	document.getElementById("storagePrice512gb").innerHTML = "+ $400.00";
	document.getElementById("storagePrice512gb").style.visibility = "visible";
	document.getElementById("storagePrice1tb").innerHTML = "+ $600.00";
	document.getElementById("storagePrice1tb").style.visibility = "visible";
	
	if (btnMemoryPressed == 0) {
		document.getElementById("totalPrice").innerHTML = "$1,099.00   ";
	} else {
		document.getElementById("totalPrice").innerHTML = "$1,299.00   ";
	}
	btnStoragePressed = 0;
});

btnStorage256gb.addEventListener("click", function(){ 
	document.getElementById("storage128gb").style.border = "1px solid gray";
	document.getElementById("storage256gb").style.border = "2px solid blue";
	document.getElementById("storage512gb").style.border = "1px solid gray";
	document.getElementById("storage1tb").style.border = "1px solid gray";
	document.getElementById("storagePrice128gb").innerHTML = "- $200.00";
	document.getElementById("storagePrice128gb").style.visibility = "visible";
	document.getElementById("storagePrice256gb").style.visibility = "hidden";
	document.getElementById("storagePrice512gb").innerHTML = "+ $200.00";
	document.getElementById("storagePrice512gb").style.visibility = "visible";
	document.getElementById("storagePrice1tb").innerHTML = "+ $400.00";
	document.getElementById("storagePrice1tb").style.visibility = "visible";
	
	if (btnMemoryPressed == 0) {
		document.getElementById("totalPrice").innerHTML = "$1,299.00   ";
	} else {
		document.getElementById("totalPrice").innerHTML = "$1,499.00   ";
	}
	btnStoragePressed = 1;
});

btnStorage512gb.addEventListener("click", function(){ 
	document.getElementById("storage128gb").style.border = "1px solid gray";
	document.getElementById("storage256gb").style.border = "1px solid gray";
	document.getElementById("storage512gb").style.border = "2px solid blue";
	document.getElementById("storage1tb").style.border = "1px solid gray";
	document.getElementById("storagePrice128gb").innerHTML = "- $400.00";
	document.getElementById("storagePrice128gb").style.visibility = "visible";
	document.getElementById("storagePrice256gb").innerHTML = "- $200.00";
	document.getElementById("storagePrice256gb").style.visibility = "visible";
	document.getElementById("storagePrice512gb").style.visibility = "hidden";
	document.getElementById("storagePrice1tb").innerHTML = "+ $200.00";
	document.getElementById("storagePrice1tb").style.visibility = "visible";
	
	if (btnMemoryPressed == 0) {
		document.getElementById("totalPrice").innerHTML = "$1,499.00   ";
	} else {
		document.getElementById("totalPrice").innerHTML = "$1,699.00   ";
	}
	btnStoragePressed = 2;
});

btnStorage1tb.addEventListener("click", function(){ 
	document.getElementById("storage128gb").style.border = "1px solid gray";
	document.getElementById("storage256gb").style.border = "1px solid gray";
	document.getElementById("storage512gb").style.border = "1px solid gray";
	document.getElementById("storage1tb").style.border = "2px solid blue";
	document.getElementById("storagePrice128gb").innerHTML = "- $600.00";
	document.getElementById("storagePrice128gb").style.visibility = "visible";
	document.getElementById("storagePrice256gb").innerHTML = "- $400.00";
	document.getElementById("storagePrice256gb").style.visibility = "visible";
	document.getElementById("storagePrice512gb").innerHTML = "- $200.00";
	document.getElementById("storagePrice512gb").style.visibility = "visible";
	document.getElementById("storagePrice1tb").style.visibility = "hidden";
	
	if (btnMemoryPressed == 0) {
		document.getElementById("totalPrice").innerHTML = "$1,699.00   ";
	} else {
		document.getElementById("totalPrice").innerHTML = "$1,899.00   ";
	}
	btnStoragePressed = 3;
});