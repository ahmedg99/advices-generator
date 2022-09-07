console.log("hello");
//var text = document.querySelector("input");
//var btn1= document.querySelectorAll("button")[0];
var btn2 = document.querySelectorAll("button")[0];
var spann = document.querySelector("span");
var advice = document.querySelector("h3");



 

// function gettext() {
//     console.log(text.value);
//     spann.innerHTML = text.value;
// }
 
async function getAdvce(url) {
    //const url =  'https://api.github.com/users/';
 
    var data = fetch(url).then(res => res.json());
    data.then(function (e) {
        console.log(e.slip.advice); 
        advice.innerHTML = e.slip.advice;
        
    });
}
  
 
 
 

// btn1.addEventListener("click", (e) => {
//         e.preventDefault();
//        // gettext();
//     });
    btn2.addEventListener("click", (e) => {
        e.preventDefault();
        getAdvce("https://api.adviceslip.com/advice");
    });
 
