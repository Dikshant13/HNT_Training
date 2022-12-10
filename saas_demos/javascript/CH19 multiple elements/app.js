//assignment 1 
let div =document.createElement('div');
div.id='maindiv';
div.className='div1';

let str=document.createTextNode('Hello All !');

div.appendChild(str);


const h2 = document.createElement('h2');

h2.textContent='This is heading h2';
div.append(h2);

document.body.appendChild(div);

//Assignment 2

let list  = document.createElement('ul');
let arr = ["Home","ContactUs","AboutUs","Products","services"];

let nodes = arr.map(

    e=>{

       let listitem =  document.createElement('li');
       listitem.textContent= e;
       return listitem;

    }

);

list.append(...nodes);
div.after(list);