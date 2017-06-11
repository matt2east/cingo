var arr = []

function addChat() {
    var keysend = event.keyCode;
    var inputvalue = document.getElementById("inputchat").value;
    
    
    if (keysend == 13 && inputvalue != "") {
        arr.push(inputvalue);
        var addArr = arr;

        addArr = addArr.map(function(e) {
            return '#' + e})
        //change this
        alert("array items are " + addArr);
        
// for each item in addArr create a styled div with the message

        var newmessage = document.createElement("div");
        var messagetext = document.createTextNode(addArr);
        newmessage.appendChild(messagetext);
        document.getElementById("newchat").appendChild(newmessage);
        var styling = document.getElementById("newchat");
        styling.className += " arrow_box";    
//    document.getElementById("inputchat").value = "";
        document.getElementById("myform").reset();    
         
    } 
    

}
