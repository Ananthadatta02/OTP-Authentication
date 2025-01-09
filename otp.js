var otp;
function generateOTP(){
    document.getElementById("otpWindow").style.display = "block"
    var num1 = (Math.floor(Math.random()*10));
    var num2 = (Math.floor(Math.random()*10));
    var num3 = (Math.floor(Math.random()*10));
    var num4 = (Math.floor(Math.random()*10));
    otp = (`${num1}${num2}${num3}${num4}`)
    document.getElementById("otp").innerHTML = otp;
    console.log("Generated OTP.."+otp);
    document.getElementById("inp1").value = ""
    document.getElementById("backgroundColour").style.backgroundColor = "lightgreen"
}

function otpWindowClose(){
    document.getElementById("otpWindow").style.display = "none"
}

function validateOTP(){
     var userEnteredOTP = document.getElementById("inp1").value;
    console.log("UserEntered.."+userEnteredOTP);
    console.log("Generated.."+otp);
    if (userEnteredOTP == otp){
        document.getElementById("status").innerHTML = "Access Granted"
        document.getElementById("backgroundColour").style.backgroundColor = "lightpink"
        document.getElementById("inp2").type = "Submit";
    }
    else{
        document.getElementById("backgroundColour").style.backgroundColor = "Red"
        document.getElementById("status").innerHTML = "Access Denied"
    }
}