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