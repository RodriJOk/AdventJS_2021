// Invertir en criptomonedas es casi un deporte de riesgo. 
// El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

// Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día 
// y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

// La lista de precios es un array de números y representa el tiempo de izquierda a derecha. 
// Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no 
// puedes vender a un precio que esté a la izquierda de la compra.

// Por ejemplo:

// const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
// maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

// const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
// maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
    
// Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura:

// const pricesDoge = [18, 15, 12, 11, 9, 7]
// maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

// const pricesAda = [3, 3, 3, 3, 3]
// maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)

function maxProfit(prices) {
    //Setea el valor Maximo de ganancia en 0
    let maxProfit = 0;
    //Setea el valor de la compra mas baja en el primer valor del array
    let minPrice = prices[0];
    //Aca se recorre el array de precios
    for (let i = 1; i < prices.length; i++) {
        //Si el precio actual es menor que el precio de compra mas bajo, se setea el precio de compra mas bajo en el precio actual
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            console.log(Math.max(prices[i] - minPrice));
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    if(maxProfit === 0) {
        return -1;
    } else {
        return maxProfit;
    }
}

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) 
// -> 16 (compra a 18, vende a 34)