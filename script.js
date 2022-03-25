document.getElementById(`Loggen`).innerHTML="Logged in as Guest";
document.getElementById(`Enter`).innerHTML = "Enter your list here";
document.getElementById(`added`).innerHTML = "Nothing added now";

let btn = document.getElementById(`btn`);

// for Time and Date
const d = new Date();
document.getElementById("Date").innerHTML = d;
let t = d.getHours();
let Minutes = d.getMinutes();

document.getElementById("Time").innerHTML = t;

// need help here



const add = () =>{
    document.getElementById(`added`).style.display="none";   
    
    // creating new paragraph
    
    
    let TakeValue = document.getElementById(`TakeValue`).value;
    let newPara = document.createElement("p");
    newPara.className = "todo-value";
    newPara.innerHTML = TakeValue+'<span class="trachCane"><i class="fa-solid fa-trash-can color" id="removeIT" onclick="newPara.remove();"></i></span>';
    document.getElementById('d-none').appendChild(newPara);
    // paragraph created


}
// const removeNow = () =>{
//     newPara.remove();
// };

