fetch('http://XXX/xxx.txt') //source
	.then(x=>x.blob())
	.then(x=>new Blob([x],{type:'text/css'})) //type
	.then(x=>URL.createObjectURL(x))
	.then(x=>{
		let link = document.createElement('link'); //insert to the html
		link.rel='stylesheet';
		link.href=x;document.body.appendChild(link);
		return new Promise((resolve)=>{
    		link.onload=function(){resolve(x)};
	})})
	.then(x=>URL.revokeObjectURL(x));
