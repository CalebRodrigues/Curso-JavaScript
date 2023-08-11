//Classes

class Carro{
    constructor(v1, v2, v3){
        this.marca = v1;
        this.modelo = v2;
        this.ano = v3;
    }
    buzina(){
        return this.modelo+" buzinou";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);
console.log(uno);
console.log(gol);
console.log(gol.buzina());
console.log(uno.buzina());
