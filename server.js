//SERVER ONE

var http = require("http");
var firstPort = 7000;

function handleRequest(request, response) {
    response.end("IS THIS A SERVER? " + request.url
    );
}
var server = http.createServer(handleRequest);
server.listen(firstPort, function() {
console.log("Server listening on: http://localhost:" + firstPort);
});

/////////////////////////////////////////////////////

//SERVER TWO

var http = require("http");
var secondPort = 7500;

function handleRequest2(request, response) {
    response.end("I Like Pat Thai: " + request.url
    );
}
var server = http.createServer(handleRequest2);
server.listen(secondPort, function() {
console.log("Server listening on: http://localhost:" + secondPort);
});
