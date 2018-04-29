function sendWhatsApp(){
    var url = "https://api.whatsapp.com/send?"
    var phone = document.getElementById("WhatsApp-request")[0].value
    var text = document.getElementById("WhatsApp-request")[1].value
    url = url + "phone=" + phone + "&text=" + text
    if(phone.length > 0 && checkPhone(phone) && text.length > 0){
        document.location.replace(url)
    }else{
        document.getElementById("error").className = "alert alert-danger"
        document.getElementById("error").innerHTML = "<strong>Fail</strong> Please fill in form correctly."
    }

    
}

function checkPhone(phone){
    allowed_values = "0123456789"
    var score = 0
    for(i=0;i<=phone.length;i++){
        if(allowed_values.includes(phone[i])){score+=1}
    }
    if(score == phone.length){
        return true
    }else{
        return false
    }
}