function myFunction() {
    var x = event.keyCode;
    var inputvalue = document.getElementById("inputchat").value;
    if (x == 13 && inputvalue != "") {
        alert(inputvalue)
    } 

}



