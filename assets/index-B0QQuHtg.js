const e=["#e74c3c","#8e44ad","#3498db","#e67e22","#2ecc71"],r=["#1679AB","#1679AB","#BC5A94","#AF47D2","#26355D","#686D76","#F1E5D1"],t=["green","yellow","#1679AB","#1679AB","#BC5A94","#AF47D2","#26355D","#686D76","#F1E5D1"];function n(o){if(o==1)return e[Math.floor(Math.random()*e.length)];if(o==2||o==4)return r[Math.floor(Math.random()*r.length)];if(o==3)return t[Math.floor(Math.random()*t.length)]}export{n as getRandomColor};
