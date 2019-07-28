const showMenu = () =>{
    let menu = document.getElementById('menu')
    if(menu.style.display = "none"){
        menu.style.display = "block"
        menu.classList.replace('show', 'hide')
    }else{
        menu.style.display = "none"
        menu.classList.replace('hide', 'show')
    }
    console.log(menu.style.display)
}