const backArrow = document.querySelector(".back-arrow");
backArrow.addEventListener('click', () => {
  window.location.href = "../Kyle/restaurant.html"; // Use forward slashes
});


//Going to the payment page 
const continueToPayment =document.querySelector(".payment-button");
continueToPayment.addEventListener('click',()=>{
  window.location.href="payment.html";
})

//after the payment page moving to the delivery page 

const payButton = document.getElementById("confirm")
  payButton.addEventListener('click', ()=>{
  window.location.href="../Karthik/delivery.html";
})