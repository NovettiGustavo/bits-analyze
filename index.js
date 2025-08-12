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