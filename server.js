var server = require ('connect');
server().use(server.static(__dirname)).listen(Number(process.env.PORT || 8080));

