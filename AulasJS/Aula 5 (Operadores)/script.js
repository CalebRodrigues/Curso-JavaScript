//Operadores Aritméticos

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total = valor1 + valor2;

//total = valor1 - valor2;
//total = valor1 / valor2;
//total = valor1 * valor2;
//total = valor1++;
//total = valor1--;

document.write(total + "<br>");

//Operadores de Atribuição

var v1, v2, t;
//v1 += v2;
//v1 -= v2;
//v1 /= v2;
//v1 *= v2;

//Operadores Condicional

var idade, eleitor, resultado;
idade = 61;
eleitor = (idade>=18) ? "Eleitor" : "Não eleitor";

resultado = (idade > 60 && idade < 70); //and
//resultado = (idade == 60 || idade == 70); //or

document.write(eleitor + "<br>");
document.write(resultado);