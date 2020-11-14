var obiwan = document.getElementById('obiwan') ;
var yoda = document.getElementById('yoda') ;
var vader = document.getElementById('vader') ;
var windu = document.getElementById('windu') ;

var blue = document.getElementById('blue') ;
var green =document.getElementById('green') ;
var red =document.getElementById('red') ;
var purple =document.getElementById('purple') ;

var obi_p1 = document.getElementById('obi1') ;
var obi_p2 = document.getElementById('obi2') ;

var yod_p1 = document.getElementById('yoda1') ;
var yod_p2 = document.getElementById('yoda2') ;

var vad_p1 = document.getElementById('vader1') ;
var vad_p2 = document.getElementById('vader2') ;

var win_p1 = document.getElementById('windu1') ;
var win_p2 = document.getElementById('windu2') ;


obiwan.addEventListener('click', function(){
	if(blue.className == 'active'){
		blue.removeAttribute('class','active') ;
		obi_p1.removeAttribute('class', 'active') ;
		obi_p2.removeAttribute('class', 'active') ;
	}
	else{
		blue.setAttribute('class', 'active') ;
		obi_p1.setAttribute('class', 'active') ;
		obi_p2.setAttribute('class', 'active') ;
	}
}, false);


yoda.addEventListener('click', function(){
	if(green.className == 'active'){
		green.removeAttribute('class','active') ;
		yod_p1.removeAttribute('class', 'active') ;
		yod_p2.removeAttribute('class', 'active') ;
	}
	else{
		green.setAttribute('class', 'active') ;
		yod_p1.setAttribute('class', 'active') ;
		yod_p2.setAttribute('class', 'active') ;
	}
}, false);


vader.addEventListener('click', function(){
	if(red.className == 'active'){
		red.removeAttribute('class','active') ;
		vad_p1.removeAttribute('class', 'active') ;
		vad_p2.removeAttribute('class', 'active') ;
	}
	else{
		red.setAttribute('class', 'active') ;
		vad_p1.setAttribute('class', 'active') ;
		vad_p2.setAttribute('class', 'active') ;
	}
}, false);


windu.addEventListener('click', function(){
	if(purple.className == 'active'){
		purple.removeAttribute('class','active') ;
		win_p1.removeAttribute('class', 'active') ;
		win_p2.removeAttribute('class', 'active') ;
	}
	else{
		purple.setAttribute('class', 'active') ;
		win_p1.setAttribute('class', 'active') ;
		win_p2.setAttribute('class', 'active') ;
	}
}, false);