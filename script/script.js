function calculatePrice(){
    var userAge = parseFloat(document.getElementById("userAge").value);
    if((userAge > -1 && userAge > 160) || Number.isNaN(userAge)==true){
        alert("the user age you insered is not correct");
    } else{
        var travelDistance = parseFloat(document.getElementById("travelDistance").value);
        if(travelDistance < 0 || Number.isNaN(travelDistance)==true)
        {
            alert("the distance you insered is not correct");
        }else{
            var tiketPrice = travelDistance * 0.21; 
            if(userAge < 18){
                tiketPrice *= 0.8;
            }else if(userAge > 65){
                tiketPrice *= 0.6;
            }
            document.getElementById("result").value = parseInt(tiketPrice); 
            // alert(parseInt((tiketPrice-parseInt(tiketPrice))*100));
            document.getElementById("result__module").innerHTML = "." + parseInt((tiketPrice-parseInt(tiketPrice))*100);
        }
    }
}


