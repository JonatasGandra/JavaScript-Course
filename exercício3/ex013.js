var c = window.document.querySelector('#contar')
c.addEventListener('click', contar)

function contar(){

    var is = window.document.querySelector( '#inicio')
    var fs = window.document.querySelector( '#fim')
    var ps = window.document.querySelector( '#passos')
    var i = Number(is.value)
    var f = Number(fs.value)
    var p = Number(ps.value)
    var res = window.document.querySelector('#res')
    res.innerHTML = ''
    
    if(p==0){
        p+=1
    }
    if(i<f){
        for(i; i<=f; i+=p){  
            res.innerHTML += (`${i} -> `)
    }
    }else{
    for(i; i>=f; i-=p){
            res.innerHTML += (`${i} -> `)
    }
}
res.innerHTML += 'fim!'
}