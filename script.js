var startBtn = document.querySelector(".start"); 
var addBtn = document.querySelector(".adder");
var minusBtn = document.querySelector(".decrease");
var counter = 0;
var timeLeft = 1500;
var romanNums = {
  "M":1000,
  "CM":900,
  "D":500,
  "CD":400,
  "C":100,
  "XC":90,
  "L":50,
  "XL":40,
  "X":10,
  "IX":9,
  "V":5,
  "IV":4,
  "I":1,
};

function convertToRoman(num){
  var romanized = "";
  for (var roman in romanNums){
    while(romanNums[roman] <= num){
      romanized += roman;
      num -= romanNums[roman];
    }
  }
  return romanized;
}

if(Math.floor(timeLeft%60*10)/10 === 0){
	document.getElementById("secs").innerHTML = "0" + "0";
	document.getElementById("mins").innerHTML = convertToRoman(Math.floor(timeLeft/60));

}else{
	document.getElementById("mins").innerHTML = convertToRoman(Math.floor(timeLeft/60));
	document.getElementById("secs").innerHTML = convertToRoman(Math.floor(timeLeft%60*10)/10);
}

startBtn.addEventListener("click", startTimer, {once:true});

addBtn.addEventListener("click", function(){
	timeLeft += (300);
});

minusBtn.addEventListener("click", function(){
	timeLeft -= (300);
});

function startTimer(){
	var x = setInterval(decrease, 1000);
}

function decrease(){
	var delta = timeLeft-counter;
	counter ++;
	let minsLeft=Math.floor(delta/60);
	let secsLeft=Math.floor(delta%60*10)/10;
	if(delta < 0){
		clearInterval();
		document.querySelector(".digits").innerHTML = "You Finished!";
	} else{
		document.getElementById("mins").innerHTML = convertToRoman(Math.floor(delta/60));
		document.getElementById("secs").innerHTML = convertToRoman(Math.floor(delta%60*10)/10);
		document.querySelector(".title").innerHTML = "Pomodoro-" + Math.floor(delta/60) + ":" + Math.floor(delta%60*10)/10;
	}
		
}







