function calc(){
    let euro = euroField.value;
    let resultToDollar = (euro * 1.09).toFixed(2).replace(".", ",");
    usd.value = resultToDollar;
console.log("ww")
    
}
function calcv2(){
    let usdollar = usdField.value;
    let resultToEuro = (usdollar * 0.91).toFixed(2).replace(".", ",");
    eur.value = resultToEuro;
    
}