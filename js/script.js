	var counter = 0;
	var score = 0;
	var d200 = 200;
	var cheat = false;
	const emojis = [
		'<i class="fas fa-grin-tongue"></i>',
		'<i class="fas fa-grin-tears"></i>',
		'<i class="fas fa-grin-tongue-wink"></i>',
		'<i class="fas fa-grin-wink"></i>',
		'<i class="fas fa-laugh-wink"></i>'
	];
	const button = document.getElementById("mainButton");

	window.onload = ()=>{
		button.style.transition = "0.5s";
		var y= parseInt(Math.random()*(window.innerHeight-200)) + 100 ;
		var x= parseInt(Math.random()*(window.innerWidth-160)) ;
		button.style.left = x + "px";
		button.style.top = y + "px";
	}

	function randomizePos(){
		counter = 0;
		var y= parseInt(Math.random()*(window.innerHeight-200)) + 100 ;
		var x= parseInt(Math.random()*(window.innerWidth-160)) ;
		leaveMessage(button.offsetLeft+80, button.offsetTop+40);
		button.style.transform = "scale(0)"; 
		button.style.fontSize = "0px";
		setTimeout(() => {
			button.style.display = "none";
			setTimeout(() => {
				button.style.display = "block";
				button.style.fontSize = "20px";
				button.style.left = x + "px";
				button.style.top = y + "px";
				button.style.transform = "scale(1)"; 
			}, d200);
		}, d200);
	}

	function leaveMessage(x, y){
		var msg = document.createElement('div');
		msg.innerHTML = emojis[parseInt(Math.random()*emojis.length)];
		msg.style.position = "absolute";
		msg.style.opacity = "0";
		msg.style.transition = "0.5s";
		msg.style.left = x+"px";
		msg.style.fontSize = "50px";
		msg.style.top = y+"px";
		document.body.appendChild(msg);
		setTimeout(() => {
			msg.style.opacity = "1";
		}, 50);
		setTimeout(() => {
			msg.style.opacity = "0";
			setTimeout(() => {
				document.body.removeChild(msg);
			}, 500)
		}, 500);
	}

	window.onmousemove = (evt) => {
		var x = evt.clientX;
		var y = evt.clientY;
		var dist = Math.sqrt(Math.pow(button.offsetLeft-x+80, 2) + Math.pow(button.offsetTop-y+40, 2));
		if(dist < 100 && counter > 4){
			if(cheat){
				randomizePos();
			}else{
				randomizePos();
			}	
		}
	}

	window.onkeypress = (evt) => {
		console.log((button.style.transition));
		if(evt.key = "Z"){
			cheat = !cheat;
			if(cheat){
				button.style.transition = "1s";
				d200 = 800;
			}else{
				button.style.transition = "0.5s";
				d200 = 200;
			}
		}
	}

	button.onclick = () => {
		score = score + 1;
		document.getElementById('info').innerText = "Score : " + score;
	}

	setInterval(()=> {
		counter = counter + 1;
	}, 100);
