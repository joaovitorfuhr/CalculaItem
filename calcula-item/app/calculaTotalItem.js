const lista = [
    {id: 1, nome: 'laranja', valorUnitario: 3},
    {id: 2, nome: 'morango', valorUnitario: 5},
    {id: 3, nome: 'bergamota', valorUnitario: 2},
    {id: 4, nome: 'caju', valorUnitario: 7},
];

const calculaTotalItem = function(codigo, quantidade, desconto = 0 ) {
  var produtoEncontrado;

  for(var i = 0; i <= lista.length-1; i++) {
    if(lista[i].id == codigo) {
      var produtoEncontrado = lista[i];
    }
  }
  if ( desconto > produtoEncontrado.valorUnitario *quantidade ){
    return {mensagem: "desconto inexistente"};
  }

    return {produto: produtoEncontrado.nome, valor: produtoEncontrado.valorUnitario * quantidade - desconto};


}

module.exports = { calculaTotalItem }
