heart = document.getElementsByClassName("heart");
heart[0].addEventListener("mouseenter", function(){
	document.getElementById("h1").src = "Images/heartAfter.png"
})
heart[1].addEventListener("mouseenter", function(){
	document.getElementById("h2").src = "Images/heartAfter.png"
})
heart[2].addEventListener("mouseenter", function(){
	document.getElementById("h3").src = "Images/heartAfter.png"
})
heart[3].addEventListener("mouseenter", function(){
	document.getElementById("h4").src = "Images/heartAfter.png"
})

heart[0].addEventListener("mouseleave", function(){
	document.getElementById("h1").src = "Images/heartBefore.png"
})

heart[1].addEventListener("mouseleave", function(){
	document.getElementById("h2").src = "Images/heartBefore.png"
})

heart[2].addEventListener("mouseleave", function(){
	document.getElementById("h3").src = "Images/heartBefore.png"
})

heart[3].addEventListener("mouseleave", function(){
	document.getElementById("h4").src = "Images/heartBefore.png"
})
document.getElementById("genacvale").addEventListener("mouseenter", function(){
	document.getElementById("genacvale").style.border = "1px solid red"
})
document.getElementById("pl").addEventListener("mouseenter", function(){
	document.getElementById("pl").style.border = "1px solid red"
})
document.getElementById("pandok").addEventListener("mouseenter", function(){
	document.getElementById("pandok").style.border = "1px solid red"
})
document.getElementById("hb").addEventListener("mouseenter", function(){
	document.getElementById("hb").style.border = "1px solid red"	
})

document.getElementById("genacvale").addEventListener("mouseleave", function(){
	document.getElementById("genacvale").style.border = ""
})
document.getElementById("pl").addEventListener("mouseleave", function(){
	document.getElementById("pl").style.border = ""
})
document.getElementById("pandok").addEventListener("mouseleave", function(){
	document.getElementById("pandok").style.border = ""
})
document.getElementById("hb").addEventListener("mouseleave", function(){
	document.getElementById("hb").style.border = ""	
})