async function romanToInt(int){
    console.log(int)

    const number = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;

    for (let index = 0; index < int.length; index++) {
        let currentRomanNum = 0;
        let currentNumber = number[int[index]];
        let nextNumber = number[int[index+1]];

        if(currentNumber < nextNumber) {
            currentRomanNum = nextNumber-currentNumber;
            index++;
        } else {
            currentRomanNum = currentNumber
        }
        
        result = result + currentRomanNum;
    }

    console.log(`total = ${result}`)
}

romanToInt('LVIII');