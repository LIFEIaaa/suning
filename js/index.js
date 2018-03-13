//banner效果
{
	const imgs=document.querySelectorAll(".bar_tupian li");
	const pagers=document.querySelectorAll(".lunbodian li");
	const banner=document.querySelector(".banner");
	const banner_lbtn=document.querySelector(".banner_lbtn");
	const banner_rbtn=document.querySelector(".banner_rbtn");
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			};
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		};
	});
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		};
		if(n<0){
			n=imgs.length-1;
		};
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		};
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
		// console.log(n);
	};
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};
	let flag=true;
	banner_rbtn.onclick=function(){
		if(flag){
			flag=false;
			move();
		}		
	};
	banner_lbtn.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}		
	};
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
}
//顶部、侧导航开始
{
	let topbar=document.querySelector(".topbar");
	let leftbar=document.querySelector(".leftbar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>670){
			topbar.style.display="block";
		}else{
			topbar.style.display="none";
		}
		if(st>2500){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
	}
}

//侧导航开始
{
	let tips=document.querySelectorAll(".tips");
	let containers=document.querySelectorAll(".container");
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=containers[index].offsetTop-200;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/10;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;
			},25)
		}
	})
	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		for(let i=0;i<containers.length;i++){
			if(st>containers[i].offsetTop-200){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
				}
				tips[i].classList.add("active");
			}
		}
	})
}

//侧导航返回顶部
{
	let totop=document.querySelector(".leftbar-top");
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25);
	}
}

//固定栏效果
{
	let totop=document.querySelector(".xiezi1");
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25);
	}
}
//商品分类
{
	let box=document.querySelector(".topbar-center");
	let tip=document.querySelector(".topbar-left");
	let container=document.querySelector(".topbar-list");
	tip.onmouseenter=function(){
		container.style.display="block";
	};
	box.onmouseleave=function(){
		container.style.display="none";
	}
}
//banner标签栏
{
	let tips=document.querySelectorAll(".list1");
	let menus=document.querySelectorAll(".bar-menu");
	let obj=menus[0];
	tips.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			menus[index].style.borderTop="1px solid #000";
			menus[index].style.borderRight="1px solid #000";
			menus[index].style.borderBottom="1px solid #000";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}