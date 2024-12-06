var p = window.document.querySelector('#start')
p.addEventListener('click', start)

function start() {
    var anos = window.document.querySelector('#ano')
    var ano = Number(anos.value)
    var data = new Date()
    var agora = data.getFullYear()

    if (ano == 0 || ano > agora) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var idade = agora - ano
        var sexo = window.document.getElementsByName('s')
        var res = window.document.querySelector('#res')
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'

            if (idade > 0 && idade < 13) {
                img.setAttribute('src', 'imgbebem.png')
            } else if (idade > 12 && idade < 19) {
                img.setAttribute('src', 'imgteenm.png')
            } else if (idade > 18 && idade < 60) {
                img.setAttribute('src', 'imgadultom.png')
            } else if (idade > 59 && idade < 120) {
                img.setAttribute('src', 'imgidosom.png')
            } else {
                window.alert('[ERRO] Verifique os dados e tente novamente')
                return
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'

            if (idade > 0 && idade < 13) {
                img.setAttribute('src', 'imgbebef.png')
            } else if (idade > 12 && idade < 19) {
                img.setAttribute('src', 'imgteenf.png')
            } else if (idade > 18 && idade < 60) {
                img.setAttribute('src', 'imgadultof.png')
            } else if (idade > 59 && idade < 120) {
                img.setAttribute('src', 'imgidosaf.png')
            } else {
                window.alert('[ERRO] Verifique os dados e tente novamente')
                return
            }
        }
        res.innerHTML = (`Detectamos que você é um  ${genero} de ${idade} anos`)
        res.appendChild(img)
    }
}
