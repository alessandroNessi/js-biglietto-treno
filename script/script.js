function calculatePrice(){
    var userAge = parseFloat(document.getElementById("userAge").value);
    if((userAge > -1 && userAge > 160) || Number.isNaN(userAge)==true){
        alert("the user age you insered is not correct");
    } else{
        var travelDistance = parseFloat(document.getElementById("travelDistance").value);
        if((travelDistance < 0 && travelDistance > 99000) || Number.isNaN(travelDistance)==true)
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
            document.getElementById("result__module").innerHTML = "." + parseInt((tiketPrice-parseInt(tiketPrice))*100);
            document.getElementById("resultContainer").style.opacity= "1";
            document.getElementById("thomas").style.animationName = "movingThomas";
            document.getElementById("phomas").style.animationName = "movingPhomas";
            document.getElementById("rhomas").style.animationName = "movingRhomas";
            document.getElementById("angromas").style.animationName = "movingAngromas";
        }
    }
}


