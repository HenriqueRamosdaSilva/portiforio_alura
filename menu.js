const buttonMenu = document.querySelector('buttonmobi')
const cabecalhoMenu= document.querySelector('cabecalho__menu')
let isManuOpen = false

buttonMenu.addEventListener('click' ,function(){
    isManuOpen ? cabecalhoMenu.classList.add('invisivel') :cabecalhoMenu.classList.remove('invisivel')

    isManuOpen ?uttonMenu.children[0].setAttribute('src','../img/FlameMob.png' ): buttonMenu.children[0].setAttribute('src','../img/Close.png' )
    let isManuOpen = !isManuOpen
})