let s = document.querySelector('#contar')
s.addEventListener('click', selecionar)
let v = []
function inlista(num, vetor) {
    if (vetor.indexOf(num) === -1) {
        return true
    } else {
        return false
    }
}

function selecionar() {

    let ntxt = document.querySelector('#ntxt')
    let numeros = document.querySelector('#numeros')
    let n = Number(ntxt.value)

    if (ntxt.value.length == 0 || n > 100 || n < 1 || !inlista(n, v)) {
        window.alert('digite um valor válido')

    } else {
        v.push(n)
        let op = document.createElement('option')
        op.text = `Número ${n} adicionado`
        op.setAttribute('id', 'op')
        numeros.appendChild(op)
    }
    ntxt.value = ''
    ntxt.focus()

}

function finalizar() {
    if (v.length == 0) {
        window.alert('digite um valor')
    } else {
        let res = document.querySelector('#res')
        let tot = v.length
        let aux = 0
        v.sort()
        let maior = v[0]

        for (i in v) {
            if (v[i] > maior)
                maior = v[i]
        }

        for (i in v) {
            aux += v[i]
        }
        let media = aux / tot


        res.innerHTML = ''
        res.innerHTML += `<p>O total de valores add é de ${tot} </p>`
        res.innerHTML += `<p>O maior valor é ${maior} </p>`
        res.innerHTML += `<p>O menor valor é ${v[0]} </p>`
        res.innerHTML += `<p>A soma de todos os valores é ${aux} </p>`
        res.innerHTML += `<p>A média dos valores é ${media} </p>`
    }

}

