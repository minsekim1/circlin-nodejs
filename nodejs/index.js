// io.on('connection', socket => {
// 	socket.emit('request', /* … */); // emit an event to the socket
// 	io.emit('broadcast', /* … */); // emit an event to all connected sockets
// 	socket.on('reply', () => { /* … */ }); // listen to the event
// });

var server = require('http').createServer((request, response) => {
	response.writeHead(200, { "content-type": "text/html" });
	response.write("<h1>Welcome to Circlin Node server</h1>");
	console.log("An anonymous user came in.", request.method, request.url)
	response.end();
});

const io = require('socket.io')(server);
io.on('connection', client => {
	console.log("connection!");
	client.on('send', data => { console.log("send", data) });
	client.on('disconnect', () => { console.log("disconnectd!") });
});
server.listen(3000);