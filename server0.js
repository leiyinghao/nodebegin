var http = require("http")
var url = require("url")

function start(route,handle){

  function onRequest(request,response){
  var pathname = url.parse(request.url).pathname;
  console.log("Request path for" + pathname  +"received and handle is :" + handle );

  //route(handle,pathname);
  response.writeHead(200,{"Content-Type":"text/plain"});
  var content =  route(handle,pathname);
  console.log(content);

  response.write(content);
 //response.write("Hello world");
  response.end();

  }
  http.createServer(onRequest).listen(8888);
  console.log("server has stated  8888");
}

exports.start = start;
