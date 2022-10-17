const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

checkBtn.addEventListener("click", inputHandler)

function inputHandler(){
const ip = Number(initialPrice.value);
const sq = Number(stocksQuantity.value);
const cp = Number(currentPrice.value);

calculate(ip, sq, cp);

}

function calculate(initial, stocks, current){
    
    // if(initial==""||stocks==""||current=="")
    // {   
    //      output.innerText="Please fill all fields";
    //      return 0;
    // }
     if(initial===0||stocks===0||current===0)
    {   
         output.innerText="Please fill all fields with value greater than 0";
         return 0;
    }
    else if(initial<0||stocks<0||current<0)
    {   
         output.innerText="Entered Value can not be Negative";
         return 0;
    }

    else if(current > initial ){
        const profit = (current - initial)*stocks;
        const profitpercentage = (profit/initial)*100;
       output.innerText = "Profit is " + profit + " and Profit percentage is " +profitpercentage.toFixed(2) + "%";
       
     
     }
    else if(current < initial){
             const loss = (initial - current)*stocks;
             const losspercentage = (loss/initial)*100;
             output.innerText = "loss is " +loss + " and loss percentage is " +losspercentage.toFixed(2) + "%" ;
         }
    else{
             output.innerText = "No Loss No Gain, No Gain So Much Pain";
         }
}
