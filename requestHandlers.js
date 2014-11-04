var exec = require("child_process").exec;

function start(response){
	console.log("Request handler 'start' was called");
	var content = "emputy";
	/*
	function sleep(milliSeconds){
	  var starTime = new Date().getTime();
	  while (new Date().getTime() < starTime + milliSeconds);
        }

	sleep(10000);
        */
	//return "Hello Start";
	exec("find / ",
	  {timeout:10000,maxBuffer:20000*1024},
	  function(error,stdout,stderr){
	   response.writeHead(200, {"Content-Type": "text/plain"});
           response.write(stdout);
           response.end();            
	});	
	return content;
  }

function upload(response){
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;

