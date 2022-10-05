const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

checkBtn.addEventListener("click", inputHandler);

function inputHandler(){
const ip = Number(initialPrice.value);
const sq = Number(stocksQuantity.value);
const cp = Number(currentPrice.value);

calculate(ip, sq, cp);

}

function calculate(initial, stocks, current){
    if(current > initial){
        const profit = (current - initial)*stocks;
        const profitpercentage = (profit/initial)*100;
       output.innerText = "Profit is " + profit + " and Profit percentage is " +profitpercentage + "%";
       
     
     }
         else if(current < initial){
             const loss = (initial - current)*stocks;
             const losspercentage = (loss/initial)*100;
             output.innerText = "loss is " +loss + " and loss percentage is " +losspercentage + "%" ;
         }
         else{
             output.innerText = "No Loss No Gain, No Gain So Much Pain";
         }
}