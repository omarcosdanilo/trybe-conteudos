const chamaDepoisde2 = require('./temp');

test('async callback', (done) => {
  function callback(param) {
    expect(param).toBe(9);
    done()
  }
  chamaDepoisde2(9, callback);
})