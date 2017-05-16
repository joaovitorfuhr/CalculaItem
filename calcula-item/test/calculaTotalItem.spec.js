
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('../app/calculaTotalItem');

lab.experiment("verifica calculo", () => {
  lab.test("quando o produto existe", (done) => {
    expect(calculaTotalItem(1,3)).to.equal({ produto: 'laranja', valor: 9});
    done();
  })
});

lab.test('verificar retorno laranja com desconto', (done)=>{
  expect(calculaTotalItem(1,3,2)).to.equal({produto: 'laranja', valor:7});
  done();
});

lab.test('quando o desconto é maior que o valor do produto', (done)=>{
  expect(calculaTotalItem(1,3,10)).to.equal({ mensagem: 'desconto inexistente' });
  done();
});
