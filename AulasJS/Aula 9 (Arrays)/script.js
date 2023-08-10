//Arrays

const lista = [
    "Arroz", 
    "Feijão", 
    "Macarrão", 
    "Leite"
];

const lista2 = [
    "Suco",
    "Refrigerante"
];

const listajunta = lista.concat(lista2);

document.write(lista.length + "<br>");
document.write(lista[lista.length - 1] + "<br>");
lista.push("Bolacha");
document.write(lista[lista.length - 1] + "<br>");
lista.pop();
document.write(lista[lista.length - 1] + "<br>");
lista.shift();
document.write(lista[lista.length - 3] + "<br>");
lista.unshift("Queijo");
document.write(lista[lista.length - 4] + "<br>");
lista.splice(1, 0, "Requeijão");
document.write(lista + "<br>");
document.write(listajunta + "<br>");


document.write(Array.isArray(lista));