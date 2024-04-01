const changebg = document.querySelector("#icon");
let body=document.querySelector("body");
// const ptag=document.getElementById("ptag")

// ptag.style.color="red"
// ptag.style.fontSize="1.5em"

// function vee (){
//     console.log(123);
//     ptag.style.fontSize="2em";
//     document.getElementById("ptag").innerHTML="Using JavaScript"
// }


// const button1=document.getElementById("button1")
// function vee (){
//     document.getElementById("button1").innerHTML="macbook";
// }

// const tag3 = document.querySelectorAll("#ptag");

// for (let i = 0; < tag3.length; i++) {
//     tag3[i].style.color = "blue;";
    
// }


// let bg=body.style.backgroundColor

changebg.addEventListener("click",()=>{
    if (body.style.backgroundColor=="black"){
        body.style.backgroundColor="white"
    } else {
        body.style.backgroundColor="black"
    }

    if (body.style.color=="white"){
        body.style.color="black"
    } else {
        body.style.color="white"
    }
    




}
)
