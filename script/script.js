var userAge = prompt("Hello, insert your age:");
var travelDistance = parseInt(prompt("Insert your destination's distance:"));
var tiketPrice = travelDistance * 0.21; 
if(userAge < 18){
    tiketPrice *= 0.8;
}else if(userAge > 65){
    tiketPrice *= 0.6;
}
document.getElementById("result").innerHTML = "il prezzo del biglietto è " + tiketPrice; 