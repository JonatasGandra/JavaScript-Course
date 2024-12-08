let c = window.document.querySelector('#contar')
c.addEventListener('click', gerar)

function gerar(){

    let ntxt = window.document.querySelector('#ntxt')
    let n = Number(ntxt.value)
    let i = 0
    let tab = document.querySelector('#tabuada')
    if(ntxt.value.length == 0){
        window.alert('por favor, digite um número')
    }else{
       for(i; i<=10; i++){
        let item = document.createElement('option')
        item.text = `${i} x ${n} = ${i*n}`
        
        item.value = `tab${i}`// ou item.setAttribute('value', `tab${i}`)
        tab.appendChild(item)
    } 
    }
    
}