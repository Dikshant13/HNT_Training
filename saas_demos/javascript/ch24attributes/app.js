

// let div = document.getElementById("div");
// div.className += "p1";
// console.log(div.className);


let div = document.createElement("div");
div.id = 'elem';
div.setAttribute('style', "color:green; font-size: 150%");
div.innerHTML = 'Welcome to W3Docs';
document.body.appendChild(div);
// string
alert(elem.getAttribute('style')); // color:green;font-size:150%
// object
alert(elem.style); // [object CSSStyleDeclaration]
alert(elem.style.color); // green