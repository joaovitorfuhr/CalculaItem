
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaPalavras } = require('../app/contaPalavras');

lab.experiment("contaP,", () => {
  lab.test("contando as palavra", (done) => {
    expect(contaPalavras(4)).to.equal({igual a quatro palavras });
    done();
  })
});
