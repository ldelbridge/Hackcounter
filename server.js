var server = require ('connect');
server().use(server.static(__dirname)).listen(8080);
console.log("Server is running on http://localhost:8080");
