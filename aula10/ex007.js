var soma = window.document.querySelector('#somar')
soma.addEventListener('click', somar)

function somar(){
    var tn1 = window.document.querySelector('#txtn1')
    var tn2 = window.document.querySelector('#txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    var res = window.document.querySelector('#res')
    res.innerHTML = (`A soma entre ${n1} + ${n2} = ${s}`)


}