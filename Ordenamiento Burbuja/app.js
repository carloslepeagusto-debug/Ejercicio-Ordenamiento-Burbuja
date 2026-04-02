window.alert("Ingrese 3 números");

let lista = [];

for (let i = 0; i < 3; i++) {
    let contador = i + 1;
    let numero = parseFloat(prompt("Número " + contador));
    lista.push(numero);
}

let n;

do {
    n = 0;
    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] > lista[i + 1]) {
            let temp = lista[i];
            lista[i] = lista[i + 1];
            lista[i + 1] = temp;
            n = 1;
        }
    }
} while (n != 0);

if (lista[0] == lista[lista.length - 1]) {
    alert("Los 3 números son iguales");
}
else {
    alert("El menor es: " + lista[0]);
    alert("El mayor es: " + lista[lista.length - 1]);
}