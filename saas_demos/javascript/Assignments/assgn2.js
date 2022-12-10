
let form1 = document.forms[0];

function loadEventListener(){
    console.log("loadEventListener");
    form1.addEventListener("submit",submit,true);
}

loadEventListener();

function submit(){
    let carName = document.getElementById("carName").value;
    let manufactureName = document.getElementById("manufactureName").value;
    let makeYear = document.getElementById("makeYear").value;
    let price = document.getElementById("price").value;

    console.log(carName,manufactureName,makeYear,price);
    let carArray = new Array(carName,manufactureName,makeYear,price);

    alert(carArray);
    // print(carArray);

}