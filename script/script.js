function calculatePrice(){
    var userAge = parseFloat(document.getElementById("userAge").value);
    if((userAge < -1 || userAge > 160) || Number.isNaN(userAge)==true){
        setTimeout(function() { alert("the user age you insered is not correct"); }, 1000);
        document.getElementById("thomas").style.animationName = "movingThomas";
        document.getElementById("phomas").style.animationName = "movingPhomas";
        document.getElementById("rhomas").style.animationName = "movingRhomas";
        document.getElementById("angromas").style.animationName = "movingAngromas";
    } else{
        var travelDistance = parseFloat(document.getElementById("travelDistance").value);
        if((travelDistance < 0 || travelDistance > 99000) || Number.isNaN(travelDistance)==true)
        {
            setTimeout(function() { alert("the distance you insered is not correct"); }, 1000);
            document.getElementById("thomas").style.animationName = "movingThomas";
            document.getElementById("phomas").style.animationName = "movingPhomas";
            document.getElementById("rhomas").style.animationName = "movingRhomas";
            document.getElementById("angromas").style.animationName = "movingAngromas";
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
        }
    }
}


