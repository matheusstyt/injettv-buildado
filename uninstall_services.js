var Service = require('node-windows').Service;
// Criando um novo objeto do Serviço
var svc = new Service({
//Nome do servico
name:'InjetTv-Comentais',
//Descricao que vai aparecer no Gerenciamento de serviço do Windows
description: 'InjetTV - Comentais',
//caminho absoluto do seu script
script: 'C:\\Users\\simone\\Documents\\desenvolvimento\\injettv-produto\\www>'
});
svc.on('uninstall',function(){
console.log('Uninstall complete.');
});
// Desistalar serviço.
svc.uninstall();