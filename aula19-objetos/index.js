function creatPerson (nome, sobrenome, idade,){ 
return{
    nome : nome,
    sobrenome : sobrenome,
    idade : idade
 };     
}
const pessoa01 = creatPerson('João', 'Alexandre', '25 anos');
console.log(pessoa01.nome, pessoa01.sobrenome, pessoa01.idade);
console.log(typeof pessoa01)