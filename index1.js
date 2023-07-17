var item=document.querySelector('#items');
console.log(item.parentNode.parentElement)

item.lastElementChild.style.backgroundColor='red'

item.lastElementChild.textContent='not an item'

console.log(item.lastChild)

item.firstElementChild.style.backgroundColor='grey'

console.log(item.nextSibling)
console.log(item.previousElementSibling)

var items=document.createTextNode('hello')
items.className='class'
items.setAttribute('hiii','ds')
console.log(items.textContent)
var cont=document.querySelector('header .container');
cont.insertBefore(items,item)