//referenced and adapted from 'benskitchen.com' code
//Switch Scenes
function cokeScene(){
    nSwitch = 0;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function pepperScene(){
    nSwitch = 1;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function spriteScene(){
    nSwitch = 2;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}
function fantaScene(){
    nSwitch = 3;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

//Control Animation
var spinning = false;

function spin()
{
	spinning = !spinning;
	document.getElementById('model__Timer').setAttribute('enabled', spinning.toString());
	document.getElementById('model__Timer2').setAttribute('enabled', spinning.toString());
	document.getElementById('model__Timer3').setAttribute('enabled', spinning.toString());
	document.getElementById('model__Timer4').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__Timer').setAttribute('enabled', spinning.toString());
	document.getElementById('model__Timer2').setAttribute('enabled', spinning.toString());
	document.getElementById('model__Timer3').setAttribute('enabled', spinning.toString());
	document.getElementById('model__Timer4').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if( spinning != 'true'){
        document.getElementById('model__Timer').setAttribute('enabled', 'true');
		document.getElementById('model__Timer2').setAttribute('enabled', 'true');
		document.getElementById('model__Timer3').setAttribute('enabled', 'true');
		document.getElementById('model__Timer4').setAttribute('enabled', 'true');
	}

    else
        document.getElementById('model__Timer').setAttribute('enabled', 'false');
		document.getElementById('model__Timer2').setAttribute('enabled', 'false');
		document.getElementById('model__Timer3').setAttribute('enabled', 'false');
		document.getElementById('model__Timer4').setAttribute('enabled', 'false');
}

//Poly,WF, Vertex
function polygon()
{
	var e = document.getElementById('creation');
	e.runtime.togglePoints(false);
	e.runtime.togglePoints(false);
	e.runtime.togglePoints(false);
}

function vertex()
{
	var e = document.getElementById('creation');
	e.runtime.togglePoints(false);
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

function wireFrame()
{
	var e = document.getElementById('creation');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(false);
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);

}


//Lights

var lightOn = true;

function headlight() {
    lightOn = !lightOn;
    document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());

}

//Camera Viewpoints
function cameraFront()
{
	document.getElementById('model__View_Front').setAttribute('bind', 'true');
	document.getElementById('model__View_Front2').setAttribute('bind', 'true');
	document.getElementById('model__View_Front3').setAttribute('bind', 'true');
	document.getElementById('model__View_Front4').setAttribute('bind', 'true');
}

function cameraBack()
{
	document.getElementById('model__View_Back').setAttribute('bind', 'true');
	document.getElementById('model__View_Back2').setAttribute('bind', 'true');
	document.getElementById('model__View_Back3').setAttribute('bind', 'true');
	document.getElementById('model__View_Back4').setAttribute('bind', 'true');
}

function cameraLeft()
{
	document.getElementById('model__View_Left').setAttribute('bind', 'true');
	document.getElementById('model__View_Left2').setAttribute('bind', 'true');
	document.getElementById('model__View_Left3').setAttribute('bind', 'true');
	document.getElementById('model__View_Left4').setAttribute('bind', 'true');
}

function cameraRight()
{
	document.getElementById('model__View_Right').setAttribute('bind', 'true');
	document.getElementById('model__View_Right2').setAttribute('bind', 'true');
	document.getElementById('model__View_Right3').setAttribute('bind', 'true');
	document.getElementById('model__View_Right4').setAttribute('bind', 'true');
}

function cameraBottom()
{
	document.getElementById('model__View_Bottom').setAttribute('bind', 'true');
	document.getElementById('model__View_Bottom2').setAttribute('bind', 'true');
	document.getElementById('model__View_Bottom3').setAttribute('bind', 'true');
	document.getElementById('model__View_Bottom4').setAttribute('bind', 'true');
}

function cameraTop()
{
	document.getElementById('model__View_Top').setAttribute('bind', 'true');
	document.getElementById('model__View_Top2').setAttribute('bind', 'true');
	document.getElementById('model__View_Top3').setAttribute('bind', 'true');
	document.getElementById('model__View_Top4').setAttribute('bind', 'true');
}

