(()=>{let e=document.getElementById("generatorBody").innerText;const t=dummyText.repeat(200/dummyText.length)+dummyText.slice(0,200%dummyText.length);var o;console.log(t),console.log(e),console.log(typeof t),console.log(typeof e),e=t,(o=jQuery)((function(){o.dummytext.change(),o("#create").on("click",o.dummytext.create),o("#select").on("click",(function(){return o("#dummytext").select(),!1})),o("#reset").on("click",o.dummytext.reset),o("#text").on("change",o.dummytext.change)})),document.querySelectorAll("#create").forEach((e=>{e.onclick=function(){event.stopPropagation();let e=this.parentNode.querySelector(".tooltip");"block"==e.style.display?e.style.display="none":e.style.display="block"}})),document.body.onclick=function(){document.querySelectorAll(".tooltip").forEach((e=>{e.style.display="none"}))}})();