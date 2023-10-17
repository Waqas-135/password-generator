const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const iconEl = document.querySelector(".far");
const alertEl = document.querySelector(".alert-container");


btnEl.addEventListener("click", () => {
    createPassword()
});

iconEl.addEventListener("click", () =>{
    copyPassword()

    if(inputEl.value){
        alertEl.classList.remove("active")

        setTimeout(()=>{
            alertEl.classList.add("active");
        }, 2000);
    }
});

function createPassword() {
    const chars = "1234567890abcdefghijklmnopqrstuvwxyz!@#%$^&*()_+=/-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";

    for (let index = 0; index < passwordLength; index++) { 
        const randomNum = Math.floor(Math.random() * chars.length);
        debugger;
        password += chars.substring(randomNum, randomNum + 1);     
    }

    inputEl.value = password
    alertEl.innerText = password + " Copied!"

}


function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 99999); //For Mobile devices.
    navigator.clipboard.writeText(inputEl.value);    
}