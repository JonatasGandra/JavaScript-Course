window.onload = carregar;

function carregar() {
    var d = window.document.querySelector('#desejo')
    var body = window.document.querySelector('body')
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#img')
    var hora = new Date()
    var agora = hora.getHours()
    msg.innerHTML = (`Agora são ${agora}h`)
    if (agora >= 0 && agora < 12) {
        img.src = 'fotomanha.png'
        body.style.background = 'rgba(255, 238, 0, 0.782)'
        d.innerHTML = ('Bom dia!')
    } else if (agora > 12 && agora < 18) {
        img.src = 'fototarde.png'
        body.style.background = 'rgba(255, 157, 0, 0.782)'
        d.innerHTML = ('Boa tarde!')
    } else {
        img.src = 'fotonoite.png'
        body.style.background = 'rgb(0, 40, 56, 0.782)'
    }

}



