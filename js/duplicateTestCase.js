// //Write a function that:
// 1. Finds and returns all duplicate test case IDs
// 2. Counts how many times each duplicate appears
// 3. Returns the result sorted by frequency (highest first)

// ### Example Input
// ```javascript
// testResults = ["TC-001", "TC-002", "TC-003", "TC-001", "TC-004", "TC-002", "TC-001", "TC-005"]
// ```

// ### Expected Output
// ```javascript
// [
//   { testId: "TC-001", count: 3 },
//   { testId: "TC-002", count: 2 }
// ]
// ```

function duplicateTestcase(array){
    let testedData = [];
    // let duplicateCount = [];
    let duplicateCount = {}
    let finalResult = []

    // kvArray.map(({ key, value }) => ({ [key]: value }));
    // ambil data
    for(let data of array){
        if(testedData.includes(data)){
            // count berapa kali berulang
            duplicateCount[data] = (duplicateCount[data] + 1
            // console.log(data)
        } else {
            testedData.push(data)
        }
    }

    //kumpulin data jadi satu
    console.log(duplicateCount)

    for(let data in duplicateCount ){
        console.log(data)
        let finalData = {
            testId: data,
            count: duplicateCount[data]
        }

        finalResult.push(finalData);
    }

    console.log(finalResult);
    return duplicateCount;
}


const testResults = ["TC-001", "TC-002", "TC-003", "TC-001", "TC-004", "TC-002", "TC-001", "TC-005"]
duplicateTestcase(testResults);