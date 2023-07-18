var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    var newitem=document.getElementById('item').value;
    var newitem1=document.getElementById('item1').value;

    var newli=document.createElement('li');
    newli.className='list-group-item';
    var temp=newitem+' '+newitem1
    newli.appendChild(document.createTextNode(temp));
    
  
    var delbutton=document.createElement('button');
    delbutton.className="btn btn-danger btn-sm float-right delete";
    delbutton.appendChild(document.createTextNode('X'))
    newli.appendChild(delbutton);
    itemList.appendChild(newli)
}

var filter=document.getElementById('filter');

filter.addEventListener('keyup',search);

function search(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
}

