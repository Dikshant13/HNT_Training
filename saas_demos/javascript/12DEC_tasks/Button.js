function show(){
    let btn=document.getElementById('btn');
    btn.addEventListener("click",function(event){
        event.preventDefault();
        if(event.altKey && event.shiftKey)
            document.getElementById('res').innerHTML="Hello World !";
    });

}