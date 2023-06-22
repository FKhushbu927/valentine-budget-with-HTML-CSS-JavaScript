
document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
    // const quantity = document.getElementById('kitkat-quantity').value;
   // document.getElementById('chocolate').innerText = kitkatCost;

    const quantity =  getInputFieldValue("kitkat-quantity");
    const kitkatCost = quantity  * 200;
    setInnerText("chocolate", kitkatCost);
    totalSum();
})

document.getElementById('rose-buy-btn').addEventListener('click', function(){
    //   const quantity = document.getElementById('rose-quantity').value;
     //   document.getElementById('rose').innerText = roseCost;

      const quantity =  getInputFieldValue("rose-quantity");
      const roseCost = quantity * 100;
      setInnerText("rose", roseCost);
      totalSum();
})

document.getElementById('diary-buy-btn').addEventListener('click', function(){
        // const quantity = document.getElementById('diary-quantity').value;
        // document.getElementById('diary').innerText = dairyCost;

        const quantity =  getInputFieldValue("diary-quantity");
        const dairyCost = quantity * 100;
        setInnerText("diary", dairyCost);
        totalSum();
})

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
function getInputFieldValue(id){
     const value = document.getElementById(id).value;
     return parseInt(value);
}

function totalSum(params){
    const chocolatePrice = document.getElementById('chocolate').innerText;
    const rosePrice = document.getElementById('rose').innerText;
    const dairyPrice = document.getElementById('diary').innerText;
    const totalPrice = parseInt(chocolatePrice) + parseInt(rosePrice)  + parseInt(dairyPrice) ;
    // document.getElementById('total').innerText =  totalPrice;
    setInnerText("total", totalPrice);
}

document.getElementById('promo-apply-btn').addEventListener('click', function(){
       const promoCode = getInputFieldValue('promo-code');
       const total = document.getElementById('total').innerText;
       if(promoCode == 101){
        const total = document.getElementById("total").innerText;
        const sum = total - parseInt(total) * 0.1;
        setInnerText("all-total", sum);
       }
       else{
        alert("wrong promo code try again with valid code !");
       }


})