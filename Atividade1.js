var listaDePecas = ["Amortecedor", "Motor", "Filtro do ar"]

let peso = 130;

if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else  {
    console.log("A peça tem o peso adequado")
}


if (listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
} else  {
    console.log("Não tem espaço na lista")
}


let nomepeca = "disco de freio"
if (nomepeca.length > 3) {
    console.log("Nome permitido")
} else if (nomepeca.length == 0) {
    console.log("O nome da peça não pode ser vazio")
}
    else {
        console.log("Nome deve conter mais que três caracteres")

    } 