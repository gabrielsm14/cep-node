var cep = require('cep-promise');

cep('viacep.com.br/ws/01001000/xml/', {sync: false, timeout: 1000})
  .then(endereco => {
    console.log(endereco);
  })
  .catch(erro => {
    console.log(`Erro: statusCode ${erro.statusCode} e mensagem ${erro.message}`);
  });