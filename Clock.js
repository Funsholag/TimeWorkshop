function showTime() {
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var yo;


	if(hours <= 9) hours = '0'+ hours;
	if(minutes <= 9) minutes = '0'+ minutes;
	if(seconds <= 9) seconds = '0'+ seconds;

	color = "#"+ hours + minutes + seconds;
	document.body.style["background-color"]=color;

  if (hours < 12){
    document.querySelector("#clock").innerHTML= hours + ":" + minutes + ":" + seconds + " AM", color;
		yo = "Good Morning!";
  } else if (12< hours < 18) {
    document.querySelector("#clock").innerHTML= hours + ":" + minutes + ":" + seconds + " PM", color;
		yo = "Good Afternoon!";
		document.getElementById("yo").innerHTML = yo;
  } else {
		document.querySelector("#clock").innerHTML= hours + ":" + minutes + ":" + seconds + " PM", color;
		yo = "Good Evening!";
	}
	document.getElementById("yo").innerHTML = yo;
}


	setInterval(showTime, 1000);
	showTime();
