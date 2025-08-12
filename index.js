/*
Objetivo:
Criar uma função que receba um número inteiro, converta ele para binário e retorne:

A quantidade de bits 1 que existem na representação binária

Um array/lista com as posições desses bits 1 

Requisitos:
Implemente a função analisarBits(numero) que:

Recebe um número inteiro positivo (assuma que o número sempre será válido)

Converte o número para binário, armazenando cada bit em um array 

Conta quantos bits 1 existem nesse array

Retorna um objeto com duas propriedades:

quantidade: número de bits 1 encontrados

posicoes: array com os índices dos bits 1

Implemente a função main() que:

Chama a função analisarBits passando um número de sua escolha

Imprime no console a quantidade de bits 1 e as posições retornadas
*/

function toBinaryArray(number){
    return (number >>> 0).toString(2)
        .split("")
        .map(Number)
}

function searchNumberOne(binaryArray){
    if(Array.isArray(binaryArray)){
        let positions = []
        binaryArray.forEach((value, index) =>{
            if(value === 1) positions.push(index)
        });

        return {
            quantity: positions.length,
            position: positions
        }
    }
    return null;
}

function bitsAnalyze(number){
    if(typeof number === 'string'){
       number = parseInt(number)
    }
    if(typeof number !== 'number' || !Number.isInteger(number) || Number.isNaN(number)){
        return "Entry not allowed"
    }
    
    const binaryParsed = toBinaryArray(number)
    const originalParsed = binaryParsed.join("")
    const result = searchNumberOne(binaryParsed)

    return {
        original_number: number,
        binary_number: originalParsed,
        ...result 
    }
    
}

function main(){
    const number = 15;
    console.log(bitsAnalyze(number));
}

main()