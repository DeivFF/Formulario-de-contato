const inputs = document.querySelectorAll(".input")

function focusOne(){
    let parent = this.parentNode
    parent.classList.add("focus")
}
    
function blurOne(){
    let parent = this.parentNode
    if (this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) =>{
    input.addEventListener("focus", focusOne)
    input.addEventListener("blur", blurOne)
})


