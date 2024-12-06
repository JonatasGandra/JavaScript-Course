var a = window.document.querySelector('#area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
function clicar() {
    a.innerHTML = 'clicou'
    a.style.background = 'rgb(225, 000, 225)'
}
function entrar() {
    a.innerText = 'clique'
}
function sair() {
    a.innerText = 'interaja...'
    a.style.background = 'rgb(0, 38, 255)'
}