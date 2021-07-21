// io.on('connection', socket => {
// 	socket.emit('request', /* … */); // emit an event to the socket
// 	io.emit('broadcast', /* … */); // emit an event to all connected sockets
// 	socket.on('reply', () => { /* … */ }); // listen to the event
// });


// import { dbconn } from "./config/mysql/database";
const express = require('express');
const app = express();
const port = 3000;

let isDisableKeepAlive = false;
app.use((req, res, next) => {
	if (isDisableKeepAlive) {
		res.set("Connection", "close");
	}
	next();
});

app.get("/", (req, res) => res.send(`running in server ...`));

const server = app.listen(port, () => {
	if (process.send) process.send("ready");
	console.log(`server is listening on port ${port} `);

	//#region Socket APIs
	const io = require("socket.io")(server);
	socket(io)
	//#endregion Socket APIs
});

process.on("SIGINT", () => {
	isDisableKeepAlive = true;
	server.close(() => {
		l.info(`server closed `);
		process.exit(0);
	});
});
