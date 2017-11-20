var context = new (window.AudioContext || window.webkitAudioContext)();
var vol = this.context.createGain();
		
function playfixedfreq(f){
	var osc = this.context.createOscillator(); // instantiate an oscillator
	osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
	osc.frequency.value = f; // Hz
	this.vol.gain.value = 0.1; // from 0 to 1, 1 full volume, 0 is muted
	osc.connect(this.vol); // connect osc to vol
	this.vol.connect(this.context.destination); // connect vol to context destination
	osc.start(); // start the oscillator
	osc.stop(this.context.currentTime + 0.5); // stop 2 seconds after the current time
}

function playvarfreq(f){
	var osc = this.context.createOscillator(); // instantiate an oscillator
	osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
	var slider_position = this.getSliderValue();
	var step_size = this.getStepSize();
	osc.frequency.value = parseInt(f) + parseInt(slider_position)*step_size; // Hz
	this.vol.gain.value = 0.1; // from 0 to 1, 1 full volume, 0 is muted
	osc.connect(this.vol); // connect osc to vol
	this.vol.connect(this.context.destination); // connect vol to context destination
	osc.start(); // start the oscillator
	osc.stop(this.context.currentTime + 0.5); // stop 2 seconds after the current time
}
 
function getStepSize(){
	var step_sizes = this.document.getElementById("stepsize");
	return step_sizes[step_sizes.selectedIndex].value;
}

function getSliderValue(){
	var slider = this.document.getElementById("slider");
	return slider.value;
}

function onSubmit(){
	
	var data= 	{'ff':12012412420, 'vf':111124124124120, 'slider_position':13324134124,'date':'Tuesday', 'loudness':45};
	//var xhr = new XMLHttpRequest();
	//xhr.open('POST', 'http://192.168.1.55:3000/value/', true);
	//xhr.onload = function () {
		// do something to response
		//console.log(this.responseText);
	//};
	//xhr.send(datamap);
	/*window.ajax({
		type: "POST",
		url: "http://192.168.1.55:3000/value/",
		data: 	{'ff':600, 'vf':610, 'slider_position':1,'date':'Tuesday', 'loudness':45},
		success: function(result) {
			alert('ok');
		},
		error: function(result) {
			alert('error');
		}
	});*/
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	xmlhttp.open("POST", "http://192.168.1.55:3000/value/", true);
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify(data));
	xmlhttp.onload = function () {
		console.log(this.responseText);
	};
}
	