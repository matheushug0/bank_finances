let loginBtn = document.querySelector("#loginBtn");
let userLogin = document.querySelector("#userLogin");

let userPw = document.querySelector("#userPw");
let userName = document.querySelector("#userName");

let mainInfo = document.querySelector("#mainInfo");

let insertBtn = document.querySelector("#insertBtn");
let removeBtn = document.querySelector("#removeBtn");

let insertModal = document.querySelector("#insertModal");
let removeModal = document.querySelector("#removeModal");


let insertValue = document.querySelector("#insertValue");
let removeValue = document.querySelector("#removeValue");

let insertValueBtn = document.querySelector("#insertValueBtn");
let removeValueBtn = document.querySelector("#removeValueBtn");


let userBalance = document.querySelector("#userBalance");
let balance = [0,"R$",0];

/* Login */
loginBtn.addEventListener("click", ()=> {


    if(userPw.value == false || userName.value == false){
        alert("Username or Password Invalid.")
    }else {
        
            userLogin.classList.add("hide");
            mainInfo.classList.remove("hide");
        
            userBalance.value = `${balance[0]} ${balance[1]}`;

    }
})

/* Main Info */

/* insert */
insertBtn.addEventListener("click", ()=> {
    mainInfo.classList.add("hide");

    insertModal.classList.remove("hide");
})

removeBtn.addEventListener("click", ()=> {
    mainInfo.classList.add("hide");

    removeModal.classList.remove("hide");
})

insertValueBtn.addEventListener("click", ()=>{
    insertModal.classList.add("hide")

    mainInfo.classList.remove("hide")

/*     if(isNaN(balance[0] + parseFloat(insertValue.value)) || parseFloat(insertValue.value) < 0){
        insertValue.value = ""
    }else { */

    balance[2] = parseFloat(insertValue.value);
    
    if(balance[2] < 0 || isNaN(balance[2])){
        insertValue.value = "";
    }else {
        console.log(balance[2])
        balance[0] += balance[2];
        userBalance.value = `${balance[0].toFixed(2)} ${balance[1]}`;
    }

    insertValue.value = "";
    console.log(balance)
})

removeValueBtn.addEventListener("click", ()=>{
    removeModal.classList.add("hide")

    mainInfo.classList.remove("hide")

/*     if(isNaN(balance[0] + parseFloat(removeValue.value)) || parseFloat(removeValue.value) < 0){
        removeValue.value = ""
    }else { */

    balance[2] = parseFloat(removeValue.value);

    if((balance[0] - balance[2]) > balance[0] || isNaN(balance[2])){
        removeValue.value = "";
    }else {
        if(balance[0] - balance[2] < 0) {
            alert("You have no money enough to complete.");
        }else {
            balance[0] -= balance[2];
            console.log(balance)
        }
    }

    userBalance.value = `${balance[0].toFixed(2)} ${balance[1]}`;
    removeValue.value = "";
})
