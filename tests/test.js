import chai from 'chai';
import chaiHttp from 'chai-http';
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

export const test = (server) => {

	describe('Test', function () {

		it('GET /', function (done) {
			chai.request(server)
				.get('/')
				.end(function (err, res) {
					res.should.have.status(200);
					done();
				});
		});
	});

}