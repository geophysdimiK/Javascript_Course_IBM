// Globaler Bereich
var globalVar = "Ich bin eine globale Variable";
let globalLet = "Ich bin auch global, aber mit let scoped";
const globalConst = "Ich bin eine globale Konstante";


{
// Blockbereich
var blockVar = "Ich bin eine block-scope var";
let blockLet = "Ich bin eine block-scope let";
const blockConst = "Ich bin eine block-scope const";
}

// Globaler Gültigkeitsbereich
console.log(globalVar); // Ausgabe: "Ich bin eine globale Variable"
console.log(globalLet); // Ausgabe: "Ich bin auch global, aber mit let begrenzt"
console.log(globalConst); // Ausgabe: "Ich bin eine globale Konstante"

//Block Scope
console.log(blockVar);
console.log(blockLet);

function show(){
    var functionVar = "Ich bin eine block-scope Variable";
    let functionLet = "Ich bin ein block-scope let";
    const functionConst = "Ich bin ein block-scope const";
    }
    show();
    
    console.log(functionVar); // Wirft ReferenceError
    console.log(functionLet); // Wirft ReferenceError
    console.log(functionConst); // Wirft ReferenceError