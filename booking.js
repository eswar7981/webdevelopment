var item=document.getElementById("form")
var itemList=document.getElementById('items');
form.addEventListener('submit',addItem)


function addItem(e){
    e.preventDefault();
    var name=document.getElementById('form1').value;
    var phonenumber=document.getElementById('form2').value;
    var email=document.getElementById('form3').value;


    var newli=document.createElement('li');
    newli.className="list-group";
    var temp=name+' '+phonenumber+" "+email
    newli.appendChild(document.createTextNode(temp));
    itemList.appendChild(newli)
    

    myobj={name:name,email:email,phonenumber:phonenumber}
    let obj=JSON.stringify(myobj);
    localStorage.setItem('obj',obj)

    
    const delbutton=document.createElement('input');
    delbutton.type='button'
    delbutton.value="Delete"
    delbutton.onclick=() =>{
        localStorage.removeItem('obj')
        itemList.removeChild(newli)
    }
    newli.appendChild(delbutton);
    
   


  

}
