var ok = window.document.querySelector('#ok')
ok.addEventListener('click', clique)

function clique(){
    var pais = window.document.querySelector('#pais').value
    var r = window.document.querySelector('#r')
    if (pais == 'brasil'){
        r.innerHTML = ('você é brasileiro')
    }else(
        r.innerHTML = ('você é estrangeiro')
    )
}
