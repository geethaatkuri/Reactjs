
function add(a,b){
    let sum = a + b;
    return sum;
}

function sub(a,b){
    let diff = a - b;
    return diff;
}

function mult(a,b){
    let product = a * b;
    return product;
}

function div(a,b){
    let division = a / b;
    division = division.toFixed(2);
    return division;
}

export {add, sub, mult, div};