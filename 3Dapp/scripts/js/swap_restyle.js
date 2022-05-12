
var counter = 0;

$(document).ready(function() {
	
	selectPage();
	
});

function selectPage() {

	$('#home').show();
	$('#models').hide();
	$('#interaction').hide();
	$('#cokeDescription').hide();
	$('#spriteDescription').hide(); 
	$('#pepperDescription').hide(); 
    $('#fantaDescription').hide();
    $('#galleria').hide();


	$('#navHome').click(function(){
		$('#home').show();
		$('#models').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 	
        $('#fantaDescription').hide();  
        $('#galleria').hide();
	});

	$('#navModels').click(function(){
		$('#home').hide();
		$('#models').show();
		$('#interaction').show(); 
		$('#cokeDescription').show();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide();
        $('#fantaDescription').hide();
		$("#x3dModelTitle_coke").show();
		$("#x3dModelTitle_sprite").hide();
		$("#x3dModelTitle_pepper").hide();
        $("#x3dModelTitle_fanta").hide();
		$("#x3dCreationMethod_coke").show();
		$("#x3dCreationMethod_sprite").hide();
		$("#x3dCreationMethod_pepper").hide(); 
        $("#x3dCreationMethod_fanta").hide(); 
        $('#galleria').show();
	});
}


function cokeDescription() {
	$("button").click(function(){
		
		$("#cokeDescription").show();
        $("#spriteDescription").hide();
		$("#pepperDescription").hide();
        $('#fantaDescription').hide();
		
		$("#x3dModelTitle_coke").show();
		$("#x3dModelTitle_sprite").hide();
		$("#x3dModelTitle_pepper").hide();
        $("#x3dModelTitle_fanta").hide();

		$("#x3dCreationMethod_coke").show();
		$("#x3dCreationMethod_sprite").hide();
		$("#x3dCreationMethod_pepper").hide();
        $("#x3dCreationMethod_fanta").hide(); 
    }); 
}

function spriteDescription() {
    $("button").click(function(){

        $("#cokeDescription").hide();
        $("#spriteDescription").show();
		$("#pepperDescription").hide();
        $('#fantaDescription').hide();
		
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_sprite").show();
		$("#x3dModelTitle_pepper").hide();
        $("#x3dModelTitle_fanta").hide();

		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_sprite").show();
		$("#x3dCreationMethod_pepper").hide();
        $("#x3dCreationMethod_fanta").hide(); 
    }); 
}

function pepperDescription() {
    $("button").click(function(){

        $("#cokeDescription").hide();
        $("#spriteDescription").hide();
		$("#pepperDescription").show();
        $('#fantaDescription').hide();
		
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_sprite").hide();
		$("#x3dModelTitle_pepper").show();
        $("#x3dModelTitle_fanta").hide();

		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_sprite").hide();
		$("#x3dCreationMethod_pepper").show();
        $("#x3dCreationMethod_fanta").hide(); 
    }); 
}

function fantaDescription() {
    $("button").click(function(){

        $("#cokeDescription").hide();
        $("#spriteDescription").hide();
        $("#pepperDescription").hide();
        $('#fantaDescription').show();
        
        $("#x3dModelTitle_coke").hide();
        $("#x3dModelTitle_sprite").hide();
        $("#x3dModelTitle_pepper").hide();
        $("#x3dModelTitle_fanta").show();

        $("#x3dCreationMethod_coke").hide();
        $("#x3dCreationMethod_sprite").hide();
        $("#x3dCreationMethod_pepper").hide();
        $("#x3dCreationMethod_fanta").show(); 
    }); 
}


function reStyle(){
    // background,header,footer
	counter += 1;
	switch (counter) {
        case 1:
            document.getElementById('theme').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('assets/images/wallpapers/cokewall02.png')";
			document.getElementById('headerColor').style.backgroundColor = '#FF9999';
            document.getElementById('headerColor').style.backgroundImage = "url('assets/images/wallpapers/flowers.png')";
			document.getElementById('footerColor').style.backgroundColor = '#996699';
            break;
        case 2:
            document.getElementById('theme').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('assets/images/wallpapers/cokewall03.jpg')";
			document.getElementById('headerColor').style.backgroundColor = 'darkcyan';
			document.getElementById('footerColor').style.backgroundColor = 'darksalmom';
            break;
        case 3:
            document.getElementById('theme').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('assets/images/wallpapers/cokewall04.jpg')";
            document.getElementById('headerColor').style.backgroundColor = 'rgba(175,0,0,1)';
            document.getElementById('footerColor').style.backgroundColor = 'darksalmom';
            break;
        case 4:
            document.getElementById('theme').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('assets/images/wallpapers/cokewall05.jpg')";
			document.getElementById('headerColor').style.backgroundColor = 'chocolate';
			document.getElementById('footerColor').style.backgroundColor = 'dimgrey';
            break;
        case 5:
            document.getElementById('headerColor').style.backgroundColor = 'green';
            document.getElementById('footerColor').style.backgroundColor = 'darksalmom';
            break;
        case 6:
            counter = 0;
			document.getElementById('headerColor').style.backgroundColor = 'blue';
			document.getElementById('footerColor').style.backgroundColor = 'dimgrey';
            break;
    }
}

function reSet(){
    document.getElementById('theme').style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),assets/images/wallpapers/cokewall01.jpg';
	document.getElementById('headerColor').style.backgroundColor = 'rgba(175,0,0,1)';
    document.getElementById('headerColor').style.backgroundImage = "url('assets/images/wallpapers/food.png')";
	document.getElementById('footerColor').style.backgroundColor = 'rgba(175,0,0,1)';
    document.getElementById('footerColor').style.backgroundImage = "url('assets/images/wallpapers/straws.png')";
}

//Change Model Background 
function bg(){

	counter += 1;
	switch (counter) {
        case 1:
            document.getElementById('modelcomp').style.backgroundColor = 'dimgrey';
            break;
        case 2:
            document.getElementById('modelcomp').style.backgroundColor = 'orange';
            break;
        case 3:
            document.getElementById('modelcomp').style.backgroundColor = 'green';
            break;
        case 4:
            document.getElementById('modelcomp').style.backgroundColor = 'rgb(255 51 67)';
            document.getElementById('modelcomp').style.backgroundImage = "url('assets/images/wallpapers/food.png')";
            break;
        case 5:
            counter = 0;
            document.getElementById('modelcomp').style.backgroundColor = 'blue';
            break;
    }
}

function bgReset(){
        document.getElementById('modelcomp').style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
        document.getElementById('modelcomp').style.backgroundImage = "none";
}