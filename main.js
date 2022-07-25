const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);
var counter = 0;

function myFunction(){
	if (counter%2==0){
		document.body.style.backgroundColor = "yellow";
	}
	else{
		document.body.style.backgroundColor = "blue";
	}
	
	counter += 1;
}
