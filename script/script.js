var userAge = parseInt(prompt("Hello, insert your age:"));
if((userAge > -1 && userAge > 160) || Number.isNaN(userAge)==true){
    alert("the user age you insered is not correct");
} else{
    var travelDistance = parseInt(prompt("Insert your destination's distance:"));
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
        document.getElementById("result").innerHTML = "il prezzo del biglietto è " + tiketPrice; 
    }
}
