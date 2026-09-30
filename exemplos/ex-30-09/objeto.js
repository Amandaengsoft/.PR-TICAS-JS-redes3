const carro = {
    marca: "Toyota", 
    modelo: "Corola", 
    ano: 2015, 
    cor: "Pink",
    velocidade: 0,
    buzinar: function ()  {
        console.log("Estou buzinando...bibi");
    },
    acelerar: function () {
        this.velocidade = this.velocidade += 10;
    },
    desacelerar: function() {
         if (this.velocidade <= 0);
        this.velocidade = this.velocidade -= 5;
    }
}

console.table(carro);

carro.cor = "Preto"; //modifica valor do objeto//
carro.ano = 2011;

console.table(carro);
console.log(`o ano do carro é: ${carro.ano}`); //imprime apenas um dos valoresdo objeto//

carro.buzinar();  //chama a função//
carro.acelerar(); // só se chamar denovo // 
carro.acelerar(); // só se chamar denovo // 
carro.acelerar(); // só se chamar denovo // 
carro.acelerar(); // só se chamar denovo // 
carro.acelerar(); // só se chamar denovo // 
console.table(carro);

carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
console.table(carro);

const livro = {
    titulo: "A hípotese do amor",
    autor: "Ali hazelwood"
}