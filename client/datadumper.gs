function doGet(e){
  handleFunction(e);
}

function doPost(e){
  var callback = e.parameter.callback;
  handleFunction(e);
  return ContentService.createTextOutput('Success!').setMimeType(ContentService.MimeType.JAVASCRIPT);
}


function handleFunction(request){
    var json = request.postData.contents;
    var data = JSON.parse(json);
  
    var date = data.date;
    var name = data.name;
    var emailId = data.emailId;
    var gender = data.gender;
    var experience = data.experience;
    var age =data.age;
    var zeroDb = data.zeroDb;
    
    var L1 = data.L1;
    var L2 = data.L2;
    var L3 = data.L3;  
  
    var FF1 = data.FF1;
    var FF2 = data.FF2;
    var FF3 = data.FF3;
    var FF4 = data.FF4;
    var FF5 = data.FF5;
    var FF6 = data.FF6;
    var FF7 = data.FF7;
    var FF8 = data.FF8;
    
    var L1VF1 = data.L1VF1;
    var L1VF2 = data.L1VF2;
    var L1VF3 = data.L1VF3;
    var L1VF4 = data.L1VF4;
    var L1VF5 = data.L1VF5;
    var L1VF6 = data.L1VF6;
    var L1VF7 = data.L1VF7;
    var L1VF8 = data.L1VF8;
  
	var L2VF1 = data.L2VF1;
	var L2VF2 = data.L2VF2;
	var L2VF3 = data.L2VF3;
	var L2VF4 = data.L2VF4;
	var L2VF5 = data.L2VF5;
	var L2VF6 = data.L2VF6;
	var L2VF7 = data.L2VF7;
	var L2VF8 = data.L2VF8;     

	var L3VF1 = data.L3VF1;
	var L3VF2 = data.L3VF2;
	var L3VF3 = data.L3VF3;
	var L3VF4 = data.L3VF4;
	var L3VF5 = data.L3VF5;
	var L3VF6 = data.L3VF6;
	var L3VF7 = data.L3VF7;
	var L3VF8 = data.L3VF8;

	var DIFF_L1F1 = data.DIFF_L1F1;
	var DIFF_L1F2 = data.DIFF_L1F2;
	var DIFF_L1F3 = data.DIFF_L1F3;
	var DIFF_L1F4 = data.DIFF_L1F4;
	var DIFF_L1F5 = data.DIFF_L1F5;
	var DIFF_L1F6 = data.DIFF_L1F6;
	var DIFF_L1F7 = data.DIFF_L1F7;
	var DIFF_L1F8 = data.DIFF_L1F8;  

	var DIFF_L2F1 = data.DIFF_L2F1;
	var DIFF_L2F2 = data.DIFF_L2F2;
	var DIFF_L2F3 = data.DIFF_L2F3;
	var DIFF_L2F4 = data.DIFF_L2F4;
	var DIFF_L2F5 = data.DIFF_L2F5;
	var DIFF_L2F6 = data.DIFF_L2F6;
	var DIFF_L2F7 = data.DIFF_L2F7;
	var DIFF_L2F8 = data.DIFF_L2F8;
  
	var DIFF_L3F1 = data.DIFF_L3F1;
	var DIFF_L3F2 = data.DIFF_L3F2;
	var DIFF_L3F3 = data.DIFF_L3F3;
	var DIFF_L3F4 = data.DIFF_L3F4;
	var DIFF_L3F5 = data.DIFF_L3F5;
	var DIFF_L3F6 = data.DIFF_L3F6;
	var DIFF_L3F7 = data.DIFF_L3F7;
	var DIFF_L3F8 = data.DIFF_L3F8;  
  
    var ss = SpreadsheetApp.openById("1ZHo7D8_fjordNT-Yv2awJ6n1CKAOCCuOOUCIBZ0Zlbc");
    var sheet = ss.getActiveSheet();
    
    var rowContent = sheet.appendRow([date,name,emailId,age,gender,experience,zeroDb,FF1,FF2,FF3,FF4,FF5,FF6,FF7,FF8,L1,L2,L3,L1VF1,DIFF_L1F1,L1VF2,DIFF_L1F2,L1VF3,DIFF_L1F3,L1VF4,DIFF_L1F4,L1VF5,DIFF_L1F5,L1VF6,DIFF_L1F6,L1VF7,DIFF_L1F7,L1VF8,DIFF_L1F8,L2VF1,DIFF_L2F1,L2VF2,DIFF_L2F2,L2VF3,DIFF_L2F3,L2VF4,DIFF_L2F4,L2VF5,DIFF_L2F5,L2VF6,DIFF_L2F6,L2VF7,DIFF_L2F7,L2VF8,DIFF_L2F8,L3VF1,DIFF_L3F1,L3VF2,DIFF_L3F2,L3VF3,DIFF_L3F3,L3VF4,DIFF_L3F4,L3VF5,DIFF_L3F5,L3VF6,DIFF_L3F6,L3VF7,DIFF_L3F7,L3VF8,DIFF_L3F8]); 
}
