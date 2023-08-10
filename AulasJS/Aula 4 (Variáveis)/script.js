//Variáveis (var, let, const)

var pote = "Bombom";
alert(pote);


var a = 5;
var b = 8;
var resultado = a + b;
document.write("O valor de a + b é " + resultado + "<br>");

var d, c, resultadoCD;
c = 10;
d = 1;
resultadoCD = c + d;
document.write("O valor de c + d é ", resultadoCD, "<br>");

//let não pode ser declarado duas vezes
//let é uma variável local

let x = 10;

{
    let x = 3;
    document.write(x + "<br>");
}

document.write(x + "<br>");

//const não muda

const nome = "Jorge";
document.write(nome);