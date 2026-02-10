const c=document.createElement("canvas");
document.body.prepend(c);
const x=c.getContext("2d");
c.style.position="fixed";c.style.inset=0;c.style.zIndex="-1";c.style.pointerEvents="none";
function r(){c.width=innerWidth;c.height=innerHeight}r();addEventListener("resize",r);
let p=[...Array(40)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2+1,dx:.3,dy:.3}));
(function a(){x.clearRect(0,0,c.width,c.height);p.forEach(d=>{x.beginPath();x.arc(d.x,d.y,d.r,0,7);x.fillStyle="#00ffd5";x.fill();d.x+=d.dx;d.y+=d.dy;if(d.x>c.width)d.x=0;if(d.y>c.height)d.y=0});requestAnimationFrame(a)})();