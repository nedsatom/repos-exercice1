/*(function(){*/
	var mesDiv = document.getElementsByClassName('draggableBox');
	var mouse_x, mouse_y, elt_sel;

	for (var i=0,c=mesDiv.length;i<c;i++){
		mesDiv[i].addEventListener('mousedown',function(e){
			elt_sel = e.target;
		},false);
		mesDiv[i].addEventListener('mouseup',function(){
			elt_sel = '';
		},false);
	};

	document.addEventListener('mousemove',function(e){
		if (elt_sel){
			elt_sel.style.left = e.clientX + 'px';
			elt_sel.style.top = e.clientY + 'px';
		}
	},false);
	console.log('FIN')
/*})();*/