var storage = window.sessionStorage;
function disp(){
form1=document.forms[0];
username = form1.elements["username"];
user=username.value;
storage.setItem('user',user);
console.log(user);}


function disp(){
   
    var val =storage.getItem("name");
    document.getElementById("p1").innerHTML=`<h1>hello ${name}</h1>`;

}

navigator.geolocation.getCurrentPosition(updateLocation,handleLocationError);

function updateLocation(position){
   console.log('in updatelocation');
   console.log(JSON.stringify(position));
    var latitude =  position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy =  position.coords.accuracy;
   document.getElementById("lat").innerHTML=latitude;
   document.getElementById("long").innerHTML=longitude;

   document.getElementById("acc").innerHTML="this location is accurate with "+accuracy+"meters";


}
function  handleLocationError(err){

    switch(err.code){

        case 0:
            updateStatus('there was eror while retrieving location');
            break;
        case 1 :
            updateStatus('the user prevented this page from retreiving his/her location');
            break;
        case 2:
            updateStatus('the browser was unable in retreiving his/her location');
            break;  
        case 3:
            updateStatus('time out prevented this page from retreiving his/her location');
            break;   
    }
}