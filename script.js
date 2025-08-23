// login button

document.getElementById('loginButton').addEventListener("click", function (e){
    
    e.preventDefault()
   const mobileNumber = 12345678910
   const pinNumber = 1234
   const mobileNumberValue = document.getElementById('phone-num').value 
   const mobileNumberValueConverted = parseInt(mobileNumberValue)

   const pinNumbervalue = document.getElementById("pin-num").value
   const pinNumbervalueConverted = parseInt(pinNumbervalue)

   console.log(mobileNumberValueConverted,pinNumbervalueConverted)


   if (mobileNumberValueConverted === mobileNumber && pinNumbervalueConverted === pinNumber) {
    window.location.href = "./home.html"
    
   } else {
    alert("Invalid Credentials")
   }
   
})