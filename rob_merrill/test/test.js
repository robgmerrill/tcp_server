var mocha = require('mocha');
var chai = require('chai');
chai.use(require('chai-http'));

describe('tcp_server.js', function() {
  it('should receive requests and save them to a file', function(done) {
    chai.request('localhost:3000')
    .get('/')
    .end(function(err, socket) {
      expect(err).to.eql(null);
      expect(socket.text).to.eql('This is something unique!\r\n');
    });
      done();
  });

});
