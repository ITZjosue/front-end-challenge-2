const container = document.querySelector(".container")
const button = document.querySelector("button")
const input = document.querySelector("input")
const form = document.querySelector(".form")
const design = document.querySelector(".design")
const errorText = document.querySelector(".error-text")
const sucessCard = document.querySelector(".success-card")
const textSucess = document.querySelector(".text-success")
const dismissBtn = document.querySelector(".dismiss-btn")
let email = ""

button.addEventListener('click',()=>{
    email = input.value
    button.style.animation = "pressButton .3s forwards"
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)){
        input.style.background = "#fee8e7"
        input.style.color ="#c87b77"
        input.style.border = "#c9918a"
        errorText.style.display = "block"
        input.style.color = "red"
    }else{
        form.style.display = "none"
        design.style.display = "none"
        container.style.width = "500px"
        container.style.display = "block"
        sucessCard.style.display = "block"
        textSucess.innerHTML = `A confirmation email has been sent to <br>${email}</br>. Please open it and click the button inside to confirm your subscription.`
    }
    setTimeout(()=>{
        button.style.animation = ""
    },500)

})

dismissBtn.addEventListener("click",()=>{
    sucessCard.style.display = "none"
    container.style.display = "flex"
    form.style.display = "block"
    design.style.display = "block"
    container.style.width = "1000px"
    input.value = ""

})

input.addEventListener("input",()=>{
    input.style.background = ""
    input.style.color ="#8d8d8c"
    input.style.border = "solid #d9d9d8 1px"
    errorText.style.display = "none"
})