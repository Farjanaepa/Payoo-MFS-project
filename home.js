

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("add money btn clicked")

    const bank = document.getElementById("bank").value 
    const accountNumber = document.getElementById("bank-account").value 
    const amount = parseInt(document.getElementById("add-amount").value) 

    const pin = document.getElementById("add-pin").value

    const available =parseInt(document.getElementById("available-balance").innerText)

    console.log(available)

    const totalNewBalance = amount + available;

    document.getElementById("available-balance").innerText = 
    totalNewBalance
})