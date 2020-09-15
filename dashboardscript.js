





var leftnav = document.getElementById('leftnav'),
	 	topnav = document.getElementById('topnav'),
	 	main = document.getElementById('main'),
		minimize_btn = document.getElementById('minimize'),
		maximize_btn = document.getElementById('maximize');
	
window.onload = function(){
	
	minimize_btn.addEventListener('click', minimize, false);
	maximize_btn.addEventListener('click', maximize, false);

function minimize(){
	maximize_btn.style.transform = 'scale(1)';
	leftnav.style.left = "-200px";
	topnav.style.left  = '0px';
	topnav.style.width = '100%';
	main.style.left 	= '0px';
	main.style.width   = '100%';
	
}

function maximize(){
	maximize_btn.style.transform = 'scale(0)';	
	leftnav.style.left = "0px";
	topnav.style.left  = '200px';
	topnav.style.width = 'calc(100% - 200px)';
	main.style.left 	= '200px';
	main.style.width   = 'calc(100% - 200px)';
	
}
var home_act = document.getElementById('home-action'),
	users_act = document.getElementById('users-action'),
	message_act = document.getElementById('analytics-action'),
	groups_act = document.getElementById('reports-action'),
	reports_act = document.getElementById('supports-action')
	
	
	var actions = [home_act,users_act,message_act,groups_act,reports_act];
	function show(index){
		for(var i=0; i<actions.length; i++){
			if(i !== index){
			actions[i].style.display = 'none';	
			}else{
				actions[i].style.display = 'block';
			}
		}
			
	}
	show(0);
	
	var home1 = document.getElementById('home1'),
		users = document.getElementById('users'),
		message = document.getElementById('message'),
		groups = document.getElementById('groups'),
		reports = document.getElementById('reports')
		
		
		
		
		var buttons = [home1,users,message,groups,reports];
		for(j=0; j < buttons.length; j++){
			buttons[0].addEventListener('click',function(){
				show(0)},false);
				buttons[1].addEventListener('click',function(){
				show(1)},false);
				buttons[2].addEventListener('click',function(){
				show(2)},false);
				buttons[3].addEventListener('click',function(){
				show(3)},false);
				buttons[4].addEventListener('click',function(){
				show(4)},false);
				
		}
		
}
