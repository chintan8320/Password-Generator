let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");

slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', () => {
    slidervalue.textContent = inputslider.value;
})

genbtn.addEventListener('click', () => {
    passbox.value = generatepassword()
})

let lc = "abcdefghijklmnopqrstvuwxyz";
let uc = "ABCDEFGHIJKLMNOPQRSTVUWXYZ";
let nb = "0123456789";
let sb = "!@#$%^&*~";

function generatepassword() {
    let gd = "";
    let allchar = ""
    allchar += lowercase.checked ? lc : "";
    allchar += uppercase.checked ? uc : "";
    allchar += numbers.checked ? nb : "";
    allchar += symbols.checked ? sb : "";

    if (allchar.length == 0 || allchar == "") {
        return gd
    }
    else {
        for (i = 1; i <= inputslider.value; i++) {
            gd += allchar.charAt(Math.floor(Math.random() * allchar.length))
        }
        return gd
    }
}

copyicon.addEventListener('click',()=>{
    if(passbox.value != 0 ){
        navigator.clipboard.writeText(passbox.value)
        copyicon.title = "password copied"
        copyicon.innerHTML = 'check'
    }
    setTimeout(()=>{
        copyicon.title = ""
        copyicon.innerHTML = 'content_copy'
    },3000)
})

