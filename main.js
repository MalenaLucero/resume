const home = () =>{
    showElement('education')
    showElement('languages')
    showElement('portfolio')
    showElement('contact')
    //showElement('personalInfo')
    toggleMenu()
}

const education = () =>{
    showElement('education')
    hideElement('languages')
    hideElement('portfolio')
    hideElement('contact')
    if(window.innerWidth <= 600){
        hideElement('personalInfo')
        console.log(document.getElementById('personalInfo'))
    }
    toggleMenu()
}

const languages = () =>{
    showElement('languages')
    hideElement('education')
    hideElement('portfolio')
    hideElement('contact')
    toggleMenu()
}

const portfolio = () =>{
    showElement('portfolio')
    hideElement('languages')
    hideElement('education')
    hideElement('contact')
    toggleMenu()
}

const contact = () =>{
    showElement('contact')
    hideElement('languages')
    hideElement('portfolio')
    hideElement('education')
    toggleMenu()
}

const showElement = (elementId) =>{
    let element = document.getElementById(elementId)
    element.classList.replace('hide', 'show')
}

const hideElement = (elementId) =>{
    let element = document.getElementById(elementId)
    element.classList.replace('show', 'hide')
}

const toggleMenu = () =>{
    if(window.innerWidth <= 600){
        var menu = document.getElementById('menu')
        menu.classList.toggle('open')
    }
    
}