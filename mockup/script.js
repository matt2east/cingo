function addChat() {
    var keysend = event.keyCode;
    var inputvalue = document.getElementById("inputchat").value;
//    var newtext = document.createTextNode(inputvalue);
    var node = document.createElement("div");
    var textnode = document.createTextNode(inputvalue);
    
    if (keysend == 13 && inputvalue != "") {
//    console.log(inputvalue)
    node.appendChild(textnode);
    document.getElementById("newchat").appendChild(node);
    var d = document.getElementById("newchat");
        d.className += " arrow_box";    
    document.getElementById("inputchat").value = "";  
    

      
    
        
    } 

}



