function load(){
    const btnBurger = document.querySelector('.header__burger')
    btnBurger.addEventListener('click', function(){
        const header = document.querySelector('.header')
        header.classList.toggle("menuOpen")
    })


}

function reportWindowSize() {
    const header = document.querySelector('.header')
    header.classList.remove("menuOpen")
}

window.onload = load

window.onresize = reportWindowSize;