


//using promise and .then
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(res=>{console.log(res);
    res.map(user=>console.log(` ${user.id} Name: ${user.name}`));
    // res.map(user=>console.log(user));
})

.catch(
    function(err){
        console.log(err);
    }
)

//using async await

async function fetch2(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users/3");
    let data = await response.json();
    console.log(data);
}
fetch2()



let data={

    title:"a javascript book",

    body:"a very popular",

    user_id:1

}

let post2={

    title:"a java book",

    body:"a very robust",

    user_id:2

}

fetch('https://jsonplaceholder.typicode.com/posts',{

    method:"POST",

    body: JSON.stringify(data),

    headers: {"Content-type":"application/json"}

}).then(response =>response.json())

    .then(json=>console.log(json))

    .catch(err=>console.log(err))

async function post(){

    let response= await fetch('https://jsonplaceholder.typicode.com/posts',{

        method:"POST",

        body: JSON.stringify(post2),

        headers: {"Content-type":"application/json"}

    })

    let data = await response.json()

    console.log(data)

}

post()