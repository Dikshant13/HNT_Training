        function color(e){
            console.log(e);
           setTimeout(fn(e),2000);
       
        };
       function fn(e){
            (document.getElementById(e.id).style.backgroundColor='cyan')
        }
