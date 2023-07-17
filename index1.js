var a=document.getElementsByClassName("list-group-item")

a[2].style.backgroundColor='green'

for(var i=0;i<4;i++){
    a[i].style.fontWeight='bold'
}

var a=document.getElementsByClassName('list-group-item')

a[4].style.backgroundColor='red'
 
var b=document.getElementById('items')
var c=document.querySelector('.list-group-item:nth-child(2)')
c.style.backgroundColor='green'
var d=document.getElementsByClassName('list-group-item')
d[1].remove()