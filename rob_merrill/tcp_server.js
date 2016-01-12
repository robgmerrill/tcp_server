'use strict';

var net = require('net'),
    fs = require('fs');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    fs.writeFile('newNameFile.log' + new Date().toString().toLowerCase(), data.toString(), function(err) {
      if (err) return console.log(err);
    });
  socket.write('This is something unique!\r\n');
  console.log('write to file');
  });

  socket.on('end', function() {
    console.log('disconnected');
    socket.end();
    });
  });

server.listen(3000, function() {
  console.log('server is listening to port 3000');
});
