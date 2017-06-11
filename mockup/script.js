var arr = []

function addChat() {
    var keysend = event.keyCode;
    var inputvalue = document.getElementById("inputchat").value;
    
    
    if (keysend == 13 && inputvalue != "") {
        arr.push(inputvalue);
        var addArr = arr;

        addArr = addArr.map(function(e) {return '#' + e})
        alert("array items are " + addArr);
        
// for each item in addArr create a styled div with the message

        var newmessage = document.createElement("div");
        var newmessagetext = document.createTextNode(inputvalue);
        newmessage.appendChild(newmessagetext);
        document.getElementById("newchat").appendChild(newmessage);
        var styling = document.getElementById("newchat");
        styling.className += " arrow_box";    
//    document.getElementById("inputchat").value = "";
        document.getElementById("myform").reset();    
         
    } 
    

}
