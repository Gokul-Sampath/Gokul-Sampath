function add(){

    var a=Number(document.getElementById('value1').value)
    var b=Number(document.getElementById('value2').value)
    var output=a+b
    var res=document.getElementById('output')
    res.innerHTML=`${output}`
    res.style.color='green'

}
function subract(){
    var a=Number(document.getElementById('value1').value)
    var b=Number(document.getElementById('value2').value)
    var output=a-b
    var res=document.getElementById('output')
    res.innerHTML=`${output}`
    res.style.color='green'
}
function multiply(){
    var a=Number(document.getElementById('value1').value)
    var b=Number(document.getElementById('value2').value)
    var output=a*b
    var res=document.getElementById('output')
    res.innerHTML=`${output}`
    res.style.color='green'
} 
function divide(){
    var a=Number(document.getElementById('value1').value)
    var b=Number(document.getElementById('value2').value)
    var output=a/b
    var res=document.getElementById('output')
    res.innerHTML=`${output}`
    res.style.color='green'
}
function modulo(){
    var a=Number(document.getElementById('value1').value)
    var b=Number(document.getElementById('value2').value)
    var output=a%b
    var res=document.getElementById('output')
    res.innerHTML=`${output}`
    res.style.color='green'
}
function off(){
    window.close();
}
function power(){
    var a=Number(document.getElementById('value1').value)
    var b=Number(document.getElementById('value2').value)
    var output=Math.pow(a,b)
    var res=document.getElementById('output')
    res.innerHTML=`${output}`
    res.style.color='green'
}
function root_value(){
    var a=Number(document.getElementById('value1').value)
    var b=Number(document.getElementById('value2').value)
    var output=Math.pow(a,1/b)
    var res=document.getElementById('output')
    res.innerHTML=`${output}`
    res.style.color='green'
}
function reload(){
    window.location.reload();
}