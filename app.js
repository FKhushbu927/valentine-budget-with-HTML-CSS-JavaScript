
document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
    // const quantity = document.getElementById('kitkat-quantity').value;
   // document.getElementById('chocolate').innerText = kitkatCost;

    const quantity =  getInputFieldValue("kitkat-quantity");
    const kitkatCost = quantity  * 200;
    setInnerText("chocolate", kitkatCost);
})

document.getElementById('rose-buy-btn').addEventListener('click', function(){
    //   const quantity = document.getElementById('rose-quantity').value;
     //   document.getElementById('rose').innerText = roseCost;

      const quantity =  getInputFieldValue("rose-quantity");
      const roseCost = quantity * 100;
      setInnerText("rose", roseCost);
})

document.getElementById('diary-buy-btn').addEventListener('click', function(){
        // const quantity = document.getElementById('diary-quantity').value;
        // document.getElementById('diary').innerText = dairyCost;

        const quantity =  getInputFieldValue("diary-quantity");
        const dairyCost = quantity * 100;
        setInnerText("diary", dairyCost);
})

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
function getInputFieldValue(id){
     const value = document.getElementById(id).value;
     return value;
}