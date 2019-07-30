const home = () =>{
    showElement('education')
    showElement('languages')
    showElement('portfolio')
    showElement('contact')
    toggleMenu()
}

const education = () =>{
    showElement('education')
    hideElement('languages')
    hideElement('portfolio')
    hideElement('contact')
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
    var menu = document.getElementById('menu')
    menu.classList.toggle('open')
}