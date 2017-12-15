function myFunction(){
	var id = document.getElementById("mySearch").value;
	var arr = ["HB","Genac","PL","Pandok"];
		if(id==='H' || id==='h' || id==='HB' || id==='hb')
			window.location.href="Res/HB.html";
		else
			if(id==='G' || id==='g' || id==='Ge' || id==='ge' || id==='Gen' || id==='gen' || id==='Gena' || id==='gena' || id==='Genac' || id==='genac'|| id==='Genacv' || id==='genacv' || id==='Genacva' || id==='genacva' || id==='Genacval' || id==='genacval' || id==='Genacvale' || id==='genacvale' || id==='GE' || id==='GEN' || id==='GENA' || id==='GENAC' || id==='GENACV' || id==='GENACVA' || id==='GENACVAL' || id==='GENACVALE')
				window.location.href="Res/Genacvale.html";
			else
				if(id==='P' || id==='p' || id==='Pa' || id==='pa' || id==='Pau' || id==='pau' || id==='Paul' || id==='paul' || id==='Paula' || id==='paula' || id==='Paulan' || id==='paulan' || id==='Paulane' || id==='paulane' || id==='Paulaner' || id==='Paulaner' || id==='PA' || id==='PAU' || id==="PAUL" || id==='PAULA' || id==='PAULAN' || id==='PAULANE' || id==='PAULANER')
					window.location.href="Res/PL.html";
				else
					if(id==='P' || id==='p' || id==='Pa' || id==='pa' || id==='Pan' || id==="pan" || id==="Pand" || id==="pand" || id==="Pando" || id==='pando' || id==="Pandok" || id==="pandok" || id==="PA" || id==="PAN" || id==="PAND" || id==="PANO" || id==="PANOK")
						window.location.href ="Res/Pandok.html";
						else
							window.location.href ="oops.html";
}
document.getElementById("mySearch")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      myFunction();
    }
});

