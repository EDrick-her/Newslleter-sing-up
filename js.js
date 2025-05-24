const buttonSubscribe = document.getElementById("button-subscribe")
const successState = document.querySelector(".success-state")
const email =  document.getElementById("email")
const pagPrincipal= document.querySelector(".first-container-body")
const boxEmailError = document.querySelector(".state-error")
const boxEmailState = document.querySelector(".state-box-input")
const errorMessage= document.querySelector(".error-message")
const buttonDismissMessage= document.getElementById("dismiss-message")
const images = document.getElementById("container-image")
const imgDesktop= document.querySelector(".image-website")
const imgMobile = document.querySelector(".image-mobile")


const form = document.getElementById("formulario")

window.addEventListener('load', () =>{ 
        email.classList.remove("state-error") 
})

form.addEventListener("submit", function (evt){
    evt.preventDefault()
    
})


/* email.addEventListener("keydown", function (event){

    function stoprefresh(evt) {
        const buttonSubscribeType = document.getElementById("buttonSubscribe").type
        buttonSubscribeType = evt.buttonSubscribeType
        evt.preventdefauld()
        
    }
    if (event.key === "Enter") {
        
        validarEmail()
        stoprefresh()
       
    }
})
*/

buttonSubscribe.addEventListener("click", validarEmail)

function validarEmail() {
    const emailUsuario = document.getElementById("email").value
    const emailValido= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailUsuario);
    
   
    if ( emailValido) {    
        successState.classList.toggle("hidden");
        pagPrincipal.classList.add("oculto")
    }
    if (!emailValido) {
        email.classList.replace("state-box-input", "state-error" )
        errorMessage.classList.replace("hidden", "error-message")
    }
      
}
function comeBack() {
    setTimeout(()=>{
        window.location.href = "index.html"
    },100)
    /* los 100 serian los milisegundos 1000 seria  1 segundo lo dejo para recordar este comportamiento*/
}
 buttonDismissMessage.addEventListener("click", comeBack)


/* media query*/
const mediaQuery = window.matchMedia('(max-width:780px)');
function changeImg(){
if (mediaQuery.matches){
    imgDesktop.classList.add("hidden")
    imgMobile.classList.remove("hidden") 

}else {
    imgDesktop.classList.remove("hidden")
    imgMobile.classList.add("hidden")
}
}
changeImg()

mediaQuery.addEventListener("change", (e) => {
    changeImg()
})




//validacion de email con expresion regular (regex)*/