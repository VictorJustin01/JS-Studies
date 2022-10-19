// posso fazer array com "[]"
// arrays são indexsados de acordo com os elementos

               //  0     1      2
const alunos = ['luiz', 'maria', 'joão'];
alunos.push('victor', 'fernanda','julia'); // .push adiciona valores ao final do array
alunos.pop(); // .pop remove o ultimo valor do array.
delete alunos[0]
console.log(alunos);

const alunos2 = ['vitoso','bruna', 'kaylane'];
alunos2.unshift('alexandre'); //.unshift adiciona vaalores no começo do array
alunos2.unshift('silva');
console.log(alunos2);