//o usuario deve digitar seu nome

const nomeUsuario = prompt('Digite seu nome completo:');
console.log(nomeUsuario);

document.body.innerHTML = `O seu nome é: ${nomeUsuario}<br />`;
document.body.innerHTML += `o seu nome tem ${nomeUsuario.length} letras <br /> `;
document.body.innerHTML += `A segunda letra do seu nome é: ${nomeUsuario[1]} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra 'a' do seu nome: ${nomeUsuario.indexOf('a')}<br />`;
document.body.innerHTML += `qual o ultimo indice da letra 'a' do seu nome: ${nomeUsuario.lastIndexOf('a') }<br />`;
document.body.innerHTML += `as ultimas tres palavras do seu nome são: ${nomeUsuario.slice(-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nomeUsuario.split(' ')} <br />`
document.body.innerHTML += `Seu nome com letras maiusculas:${nomeUsuario.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minusculas:${nomeUsuario.toLowerCase()} <b />`;
