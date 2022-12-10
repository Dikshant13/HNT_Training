let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

p1.style.color="blue";
 function css(e,styles){
    for(const property in styles){
    e.style[property]=styles[property];

 }
}


css(p1,{backgroundColor:'blue',height:'300px'});
css(p2,{backgroundColor:'green',height:'800px'});



btn.addEventListener('click', () => window.scrollBy(0, 200));