var context = new (window.AudioContext || window.webkitAudioContext)();
var vol = this.context.createGain();
var user;
var emailId;
var zeroDb;
var age;
var gender;
var experience;
var L1VF1,L1VF2,L1VF3,L1VF4,L1VF5,L1VF6,L1VF7,L1VF8;
var L2VF1,L2VF2,L2VF3,L2VF4,L2VF5,L2VF6,L2VF7,L2VF8;
var L3VF1,L3VF2,L3VF3,L3VF4,L3VF5,L3VF6,L3VF7,L3VF8; 
var map = {'65.41':0.0389, '311.13':0.185, '698.46':0.4153, '1046.5':0.6222, '2489.04':1.48,'3951.08':2.3492,'6644.88':3.9512,'7902.16':4.6984};

function playfixedfreq(f,volume){
	var osc = this.context.createOscillator(); // instantiate an oscillator
	osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
	osc.frequency.value = f; // Hz
	this.vol.gain.value = volume; // from 0 to 1, 1 full volume, 0 is muted
	osc.connect(this.vol); // connect osc to vol
	this.vol.connect(this.context.destination); // connect vol to context destination
	osc.start(); // start the oscillator
	osc.stop(this.context.currentTime + 0.5); // stop 2 seconds after the current time
}

function playfixedfreqLoop(f,volume){
	var osc = this.context.createOscillator(); // instantiate an oscillator
	osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
	osc.frequency.value = f; // Hz
	this.vol.gain.value = volume; // from 0 to 1, 1 full volume, 0 is muted
	osc.connect(this.vol); // connect osc to vol
	this.vol.connect(this.context.destination); // connect vol to context destination
	osc.start(); // start the oscillator
	osc.stop(this.context.currentTime + 0.5);
}

function playvarfreq(f, step_size, volume, value){
	var osc = this.context.createOscillator(); // instantiate an oscillator
	osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
	//var slider_position = this.getSliderValue();
	//var step_size = this.getStepSize();
	//osc.frequency.value = parseInt(f) + parseInt(slider_position)*step_size; // Hz
	//osc.frequency.value = parseInt(f) + parseInt(value)*step_size; // Hz
	osc.frequency.value = parseInt(f) + parseInt(value)*step_size; // Hz
	this.vol.gain.value = volume; // from 0 to 1, 1 full volume, 0 is muted
	osc.connect(this.vol); // connect osc to vol
	this.vol.connect(this.context.destination); // connect vol to context destination
	osc.start(); // start the oscillator
	osc.stop(this.context.currentTime + 0.5); // stop 2 seconds after the current time
}
 
/*function getStepSize(){
	var step_sizes = this.document.getElementById("stepsize");
	return step_sizes[step_sizes.selectedIndex].value;
}*/

function getSliderValue(){
	var slider = this.document.getElementById("slider");
	return slider.value;
}

function getVolumeSliderValue(){
	var volume_slider = this.document.getElementById("volume_slider");
	return volume_slider.value;
}

function setUserData(){
	this.user = this.document.getElementById("name").value;
	this.emailId = this.document.getElementById("email").value;
	this.zeroDb = this.document.getElementById("volume_slider").value;
	this.age = this.document.getElementById("age").value;
	var genderSelect = this.document.getElementById("gender");
	this.gender = genderSelect.options[genderSelect.selectedIndex].text;
	var expSelect = this.document.getElementById("experience");
	this.experience = expSelect.options[expSelect.selectedIndex].text;
	sessionStorage.setItem("user",this.user);
	sessionStorage.setItem("emailId",this.emailId);
	sessionStorage.setItem("zeroDb",this.zeroDb);
	sessionStorage.setItem("age",this.age);
	sessionStorage.setItem("gender",this.gender);
	sessionStorage.setItem("experience",this.experience);
	this.window.location = 'survey.html';
}

function setVolumeAtL1(ref_vol){
	var l1=ref_vol*Math.pow(10,(25/20));
	return l1;
}

function setVolumeAtL2(ref_vol){
	var l2=ref_vol*Math.pow(10,(35/20));
	return l2;
}

function setVolumeAtL3(ref_vol){
	var l3=ref_vol*Math.pow(10,(45/20));
	return l3;
}

function getZeroDb(){
	return sessionStorage.getItem("zeroDb");
}

function setCentsDisplay(id,value){
	var identifier = id+'.Cents';
	this.document.getElementById(identifier).value = value;
}

function onSubmit(){
	//console.log('USER: '+ sessionStorage.getItem("user"));
	//console.log('calib: '+ sessionStorage.getItem("zeroDb"));
	
	this.user = sessionStorage.getItem("user");
	this.emailId = sessionStorage.getItem("emailId");
	this.zeroDb = sessionStorage.getItem("zeroDb");
	this.age = sessionStorage.getItem("age");
	this.gender = sessionStorage.getItem("gender");
	this.experience = sessionStorage.getItem("experience");
	
	this.L1VF1 = this.document.getElementById("L1VF1").value;
	this.L1VF2 = this.document.getElementById("L1VF2").value;	
	this.L1VF3 = this.document.getElementById("L1VF3").value;
	this.L1VF4 = this.document.getElementById("L1VF4").value;
	this.L1VF5 = this.document.getElementById("L1VF5").value;
	this.L1VF6 = this.document.getElementById("L1VF6").value;
	this.L1VF7 = this.document.getElementById("L1VF7").value;
	this.L1VF8 = this.document.getElementById("L1VF8").value;

	this.L2VF1 = this.document.getElementById("L2VF1").value;
	this.L2VF2 = this.document.getElementById("L2VF2").value;	
	this.L2VF3 = this.document.getElementById("L2VF3").value;
	this.L2VF4 = this.document.getElementById("L2VF4").value;
	this.L2VF5 = this.document.getElementById("L2VF5").value;
	this.L2VF6 = this.document.getElementById("L2VF6").value;
	this.L2VF7 = this.document.getElementById("L2VF7").value;
	this.L2VF8 = this.document.getElementById("L2VF8").value;

	this.L3VF1 = this.document.getElementById("L3VF1").value;
	this.L3VF2 = this.document.getElementById("L3VF2").value;	
	this.L3VF3 = this.document.getElementById("L3VF3").value;
	this.L3VF4 = this.document.getElementById("L3VF4").value;
	this.L3VF5 = this.document.getElementById("L3VF5").value;
	this.L3VF6 = this.document.getElementById("L3VF6").value;
	this.L3VF7 = this.document.getElementById("L3VF7").value;
	this.L3VF8 = this.document.getElementById("L3VF8").value;	
	
	//var data= 	{'date':new Date().toLocaleString(),'name':this.user,'emailId':this.emailId,'age':this.age,'gender':this.gender,'experience':this.experience,'zeroDb':this.zeroDb};
	//var data={'name':this.user.value,'emailId':this.emailId.value,'age':this.age.value,'gender':this.gender.value,'experience':this.experience.value,'zeroDb':this.zeroDb.value};
	//,'L1':25,'L1FF1':65.41,'L1VF1':65.41+map['65.41']*this.L1VF1,'DIFF_L1F1':this.L1VF1,'L1FF2':311.13,'L1VF2':311.13+map['311.13']*this.L1VF2,'DIFF_L1F2':this.L1VF2,'L1FF3':698.46,'L1VF3':698.46+map['698.46']*this.L1VF3,'DIFF_L1F3':this.L1VF3,'L1FF4':1046.50,'L1VF4':1046.50+map['1046.5']*this.L1VF4,'DIFF_L1F4':this.L1VF4,'L1FF5':2489.04,'L1VF5':2489.04+map['2489.04']*this.L1VF5,'DIFF_L1F5':this.L1VF5,'L1FF6':3951.08,'L1VF6':3951.08+map['3951.08']*this.L1VF6,'DIFF_L1F6':this.L1VF6,'L1FF7':6644.88,'L1VF7':6644.88+map['6644.88']*this.L1VF7,'DIFF_L1F7':this.L1VF7,'L1FF8':7902.16,'L1VF8':7902.16+map['7902.16']*this.L1VF8,'DIFF_L1F8':this.L1VF8,'L2':35,'L2FF1':65.41,'L2VF1':65.41+map['65.41']*this.L2VF1,'DIFF_L2F1':this.L2VF1,'L2FF2':311.13,'L2VF2':311.13+map['311.13']*this.L2VF2,'DIFF_L2F2':this.L2VF2,'L2FF3':698.46,'L2VF3':698.46+map['698.46']*this.L2VF3,'DIFF_L2F3':this.L2VF3,'L2FF4':1046.50,'L2VF4':1046.50+map['1046.5']*this.L2VF4,'DIFF_L2F4':this.L2VF4,'L2FF5':2489.04,'L2VF5':2489.04+map['2489.04']*this.L2VF5,'DIFF_L2F5':this.L2VF5,'L2FF6':3951.08,'L2VF6':3951.08+map['3951.08']*this.L2VF6,'DIFF_L2F6':this.L2VF6,'L2FF7':6644.88,'L2VF7':6644.88+map['6644.88']*this.L2VF7,'DIFF_L2F7':this.L2VF7,'L2FF8':7902.16,'L2VF8':7902.16+map['7902.16']*this.L2VF8,'DIFF_L2F8':this.L2VF8,'L3':45,'L3FF1':65.41,'L3VF1':65.41+map['65.41']*this.L1VF1,'DIFF_L3F1':this.L3VF1,'L3FF2':311.13,'L3VF2':311.13+map['311.13']*this.L1VF2,'DIFF_L3F2':this.L3VF2,'L3FF3':698.46,'L3VF3':698.46+map['698.46']*this.L3VF3,'DIFF_L3F3':this.L3VF3,'L3FF4':1046.50,'L3VF4':1046.50+map['1046.5']*this.L3VF4,'DIFF_L3F4':this.L3VF4,'L3FF5':2489.04,'L3VF5':2489.04+map['2489.04']*this.L3VF5,'DIFF_L3F5':this.L3VF5,'L3FF6':3951.08,'L3VF6':3951.08+map['3951.08']*this.L3VF6,'DIFF_L3F6':this.L3VF6,'L3FF7':6644.88,'L3VF7':6644.88+map['6644.88']*this.L3VF7,'DIFF_L3F7':this.L3VF7,'L3FF8':7902.16,'L3VF8':7902.16+map['7902.16']*this.L3VF8,'DIFF_L3F8':this.L3VF8};	
	//var data= 	{'ff':parseFloat(311.13+map['311.13']*this.L1VF2), 'vf':111124124124120, 'slider_position':13324134124,'date':String(this.user), 'loudness':45};
	//var data= 	{'date':new Date().toLocaleString(),'name':this.user,'emailId':this.emailId,'age':this.age,'gender':this.gender,'experience':this.experience,'zeroDb':this.zeroDb,'FF1': 65.41,'FF2': 311.13,'FF3': 698.46,'FF4': 1046.50,'FF5': 2489.04,'FF6': 3951.08,'FF7': 6644.88,'FF8': 7902.16,'L1':25,'L1VF1':65.41+map['65.41']*this.L1VF1,'DIFF_L1F1':this.L1VF1,'L1VF2':311.13+map['311.13']*this.L1VF2,'DIFF_L1F2':this.L1VF2,'L1VF3':698.46+map['698.46']*this.L1VF3,'DIFF_L1F3':this.L1VF3,'L1VF4':1046.50+map['1046.5']*this.L1VF4,'DIFF_L1F4':this.L1VF4,'L1VF5':2489.04+map['2489.04']*this.L1VF5,'DIFF_L1F5':this.L1VF5,'L1VF6':3951.08+map['3951.08']*this.L1VF6,'DIFF_L1F6':this.L1VF6,'L1VF7':6644.88+map['6644.88']*this.L1VF7,'DIFF_L1F7':this.L1VF7,'L1VF8':7902.16+map['7902.16']*this.L1VF8,'DIFF_L1F8':this.L1VF8,'L2':35,'L2VF1':65.41+map['65.41']*this.L2VF1,'DIFF_L2F1':this.L2VF1,'L2VF2':311.13+map['311.13']*this.L2VF2,'DIFF_L2F2':this.L2VF2,'L2VF3':698.46+map['698.46']*this.L2VF3,'DIFF_L2F3':this.L2VF3,'L2VF4':1046.50+map['1046.5']*this.L2VF4,'DIFF_L2F4':this.L2VF4,'L2VF5':2489.04+map['2489.04']*this.L2VF5,'DIFF_L2F5':this.L2VF5,'L2VF6':3951.08+map['3951.08']*this.L2VF6,'DIFF_L2F6':this.L2VF6,'L2VF7':6644.88+map['6644.88']*this.L2VF7,'DIFF_L2F7':this.L2VF7,'L2VF8':7902.16+map['7902.16']*this.L2VF8,'DIFF_L2F8':this.L2VF8,'L3':45,'L3VF1':65.41+map['65.41']*this.L1VF1,'DIFF_L3F1':this.L3VF1,'L3VF2':311.13+map['311.13']*this.L1VF2,'DIFF_L3F2':this.L3VF2,'L3VF3':698.46+map['698.46']*this.L3VF3,'DIFF_L3F3':this.L3VF3,'L3VF4':1046.50+map['1046.5']*this.L3VF4,'DIFF_L3F4':this.L3VF4,'L3VF5':2489.04+map['2489.04']*this.L3VF5,'DIFF_L3F5':this.L3VF5,'L3VF6':3951.08+map['3951.08']*this.L3VF6,'DIFF_L3F6':this.L3VF6,'L3VF7':6644.88+map['6644.88']*this.L3VF7,'DIFF_L3F7':this.L3VF7,'L3VF8':7902.16+map['7902.16']*this.L3VF8,'DIFF_L3F8':this.L3VF8};}
	var data= 	{'date':new Date().toLocaleString(),
				'name':String(this.user),
				'emailId':String(this.emailId),
				'age':parseFloat(this.age),
				'gender':String(this.gender),
				'experience':String(this.experience),
				'zeroDb':parseFloat(this.zeroDb),
				'FF1': 65.41,
				'FF2': 311.13,
				'FF3': 698.46,
				'FF4': 1046.50,
				'FF5': 2489.04,
				'FF6': 3951.08,
				'FF7': 6644.88,
				'FF8': 7902.16,
				'L1':25,
				'L1VF1':parseFloat(65.41+map['65.41']*this.L1VF1),
				'DIFF_L1F1':parseFloat(this.L1VF1),
				'L1VF2':parseFloat(311.13+map['311.13']*this.L1VF2),
				'DIFF_L1F2':parseFloat(this.L1VF2),
				'L1VF3':parseFloat(698.46+map['698.46']*this.L1VF3),
				'DIFF_L1F3':parseFloat(this.L1VF3),
				'L1VF4':parseFloat(1046.50+map['1046.5']*this.L1VF4),
				'DIFF_L1F4':parseFloat(this.L1VF4),
				'L1VF5':parseFloat(2489.04+map['2489.04']*this.L1VF5),
				'DIFF_L1F5':parseFloat(this.L1VF5),
				'L1VF6':parseFloat(3951.08+map['3951.08']*this.L1VF6),
				'DIFF_L1F6':parseFloat(this.L1VF6),
				'L1VF7':parseFloat(6644.88+map['6644.88']*this.L1VF7),
				'DIFF_L1F7':parseFloat(this.L1VF7),
				'L1VF8':parseFloat(7902.16+map['7902.16']*this.L1VF8),
				'DIFF_L1F8':parseFloat(this.L1VF8),
				'L2':35,
				'L2VF1':parseFloat(65.41+map['65.41']*this.L2VF1),
				'DIFF_L2F1':parseFloat(this.L2VF1),
				'L2VF2':parseFloat(311.13+map['311.13']*this.L2VF2),
				'DIFF_L2F2':parseFloat(this.L2VF2),
				'L2VF3':parseFloat(698.46+map['698.46']*this.L2VF3),
				'DIFF_L2F3':parseFloat(this.L2VF3),
				'L2VF4':parseFloat(1046.50+map['1046.5']*this.L2VF4),
				'DIFF_L2F4':parseFloat(this.L2VF4),
				'L2VF5':parseFloat(2489.04+map['2489.04']*this.L2VF5),
				'DIFF_L2F5':parseFloat(this.L2VF5),
				'L2VF6':parseFloat(3951.08+map['3951.08']*this.L2VF6),
				'DIFF_L2F6':parseFloat(this.L2VF6),
				'L2VF7':parseFloat(6644.88+map['6644.88']*this.L2VF7),
				'DIFF_L2F7':parseFloat(this.L2VF7),
				'L2VF8':parseFloat(7902.16+map['7902.16']*this.L2VF8),
				'DIFF_L2F8':parseFloat(this.L2VF8),
				'L3':45,
				'L3VF1':parseFloat(65.41+map['65.41']*this.L1VF1),
				'DIFF_L3F1':parseFloat(this.L3VF1),
				'L3VF2':parseFloat(311.13+map['311.13']*this.L1VF2),
				'DIFF_L3F2':parseFloat(this.L3VF2),
				'L3VF3':parseFloat(698.46+map['698.46']*this.L3VF3),
				'DIFF_L3F3':parseFloat(this.L3VF3),
				'L3VF4':parseFloat(1046.50+map['1046.5']*this.L3VF4),
				'DIFF_L3F4':parseFloat(this.L3VF4),
				'L3VF5':parseFloat(2489.04+map['2489.04']*this.L3VF5),
				'DIFF_L3F5':parseFloat(this.L3VF5),
				'L3VF6':parseFloat(3951.08+map['3951.08']*this.L3VF6),
				'DIFF_L3F6':parseFloat(this.L3VF6),
				'L3VF7':parseFloat(6644.88+map['6644.88']*this.L3VF7),
				'DIFF_L3F7':parseFloat(this.L3VF7),
				'L3VF8':parseFloat(7902.16+map['7902.16']*this.L3VF8),
				'DIFF_L3F8':parseFloat(this.L3VF8)
				};
	/*var data= 	{'name':String(this.user),
				'emailId':String(this.emailId),
				'age':parseFloat(this.age),
				'gender':String(this.gender),
				'experience':String(this.experience),
				'zeroDb':parseFloat(this.zeroDb)};			
	*/

	/*
	debugger;
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	//xmlhttp.open("POST", "http://35.185.52.114:3000/value/", true);
	xmlhttp.open("POST", "https://script.google.com/macros/s/AKfycbxLAUz82F38vMmhBCUdJb4uf9LpxO-cdbRwhpTNpsvb9taGVjeK/exec", true);	
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify(data));
	xmlhttp.onload = function () {
		console.log(this.responseText);
	};
	//this.window.location = 'thanks.html';
	*/

	var xhr = new XMLHttpRequest();
    xhr.open('POST', "https://script.google.com/macros/s/AKfycbxLAUz82F38vMmhBCUdJb4uf9LpxO-cdbRwhpTNpsvb9taGVjeK/exec",true);
	xhr.send(JSON.stringify(data));
	xhr.onload = function () {
		console.log(this.responseText);
		navigate();
	};
}
	
function navigate(){
		this.window.location = 'thanks.html';

}	