let nome, sobrenome, estudo, nascimento, idade;

nome = prompt("Digite seu nome: ");
sobrenome = prompt("Digite seu sobrenome: ");
estudo = prompt("Digite o campo de estudo: ");
nascimento = prompt("Digite o ano do seu nascimento: ");
nascimento = Number(nascimento);
idade = (2023-nascimento);

document.write("Nome completo: "+ nome +" ", sobrenome + "<br>");
document.write("Campo de estudo: " + estudo + "<br>");
document.write("Idade: "+ idade + "<br>");