// Gallery Generator Javascript
function getXMLHttp() {
	var xmlHttp
	try {
		xmlHttp = new XMLHttpRequest ();
	} catch (e) {
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				return false;
			}
		}
	}
	return xmlHttp;
}

//Make AJAX request
var xmlHttp = getXMLHttp();
//  Stores generated code
var htmlCode = "";
// Temporarily store server response
var response;


$(document).ready(function(){
    
    // Path to php function
    var send = "scripts/php/hook.php";

    // Connection to server
    xmlHttp.open("GET",send, true);

    xmlHttp.send(null);
    //Check for valid server response   
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4) {

            //Tokenize the response
            response = xmlHttp.responseText.split("~");
            //for loop of image names
            for (var i=0;i<response.length;i++) {
                htmlCode += '<a href="'+ response[i] + ' " data-fancybox data-caption="My X3D model Render" > ';
                htmlCode += '<img class="card-img-top img-thumbnail" src="' + response[i] + '"/>';
                htmlCode += '</a>';
            }
            // Return
            document.getElementById('gallery').innerHTML = htmlCode;
        }
}
});