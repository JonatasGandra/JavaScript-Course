var ok = window.document.querySelector('#ok')
var vel = window.document.querySelector('#km')
ok.addEventListener('click', clique)

function clique(){
    var vel1 = Number(vel.value)
    
    var r = window.document.querySelector('#res')
    if (vel1 > 60){
        r.innerHTML = ('você passou dos limites')
    }else{
        r.innerHTML = ('você não passou dos limites')
    
}
}