
const validpin= 1234;

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("add money btn clicked")

    const bank = document.getElementById("bank").value 
    const accountNumber = document.getElementById("bank-account").value 
    const amount = parseInt(document.getElementById("add-amount").value) 

    const pin = parseInt(document.getElementById("add-pin").value)

    const available =parseInt(document.getElementById("available-balance").innerText)

    console.log(amount, available)

    if (accountNumber.length < 11) {
        alert("Please provide a valid account number")
        return;
        
    }

    if (pin!==validpin) {
        alert('please provide valid pin')
        return;
    }

    const totalNewBalance = amount + available;

    document.getElementById("available-balance").innerText = 
    totalNewBalance
})


// toggling feature

document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-button").addEventListener("click",function(){
       document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
 
})