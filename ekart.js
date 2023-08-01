var form=document.getElementById("form")
var items=document.getElementById("items")

form.addEventListener("submit",addItem)


function addItem(e){
    e.preventDefault();
    var productname=document.getElementById("form1").value
    var price=document.getElementById("form2").value
   
    var newli=document.createElement("li");
    newli.classname="list-group"
    var temp=productname+" "+price
    console.log(temp)
    newli.appendChild(document.createTextNode(temp));
    items.appendChild(newli)
    

    obj={
        productname,price

    }

    axios.post("https://crudcrud.com/api/1dcb02de5d1f4c0f8c703309f21ca3d3/ekart",obj)
    .then((response)=>
    console.log(response))
    .catch((err)=>
    console.log(err))


    const delbut=document.createElement("input")
    delbut.type="button"
    delbut.value="DELETE"
    delbut.onclick=()=>{
        localStorage.removeItem(productname)
        axios.delete("https://crudcrud.com/api/1dcb02de5d1f4c0f8c703309f21ca3d3/ekart")
        items.removeChild(newli)
    }
    const edit=document.createElement('input');
    edit.type='button'
    edit.value="Edit"
    edit.onclick=() =>{
    localStorage.removeItem(productname)
    itemList.removeChild(newli)
    
    }


    newli.appendChild(edit);

    }



window.addEventListener("DOMContentLoaded",() =>{
    axios.get("https://crudcrud.com/api/1dcb02de5d1f4c0f8c703309f21ca3d3/ekart")
    .then((response)=>{
    console.log(response)
    for(var i=0;i<response.data.length;i++){
        console.log(showNewUser(response.data[i]))
    }
})
    .catch((err)=>{
        console.log(err)
    })
})



function showNewUser(user){
    var newli=document.createElement('li');
    newli.className="list-group";
    var temp=user.productname+' '+user.price
    newli.appendChild(document.createTextNode(temp));
    items.appendChild(newli)
    const delbutton=document.createElement('input');
    delbutton.type='button'
    delbutton.value="Delete"
    delbutton.onclick=() =>{
        axios.delete(`https:/crudcrud.com/api/1dcb02de5d1f4c0f8c703309f21ca3d3/ekart/${user._id}`)
        items.removeChild(newli)
    }
     
    newli.appendChild(delbutton);
    const edit=document.createElement('input');
    edit.type='button'
    edit.value="Edit"
    edit.onclick=() =>{
        var s=document.getElementById("form")
        s[0].value=user.productname
        s[1].value=user.price
       

        axios.delete(`https:/crudcrud.com/api/1dcb02de5d1f4c0f8c703309f21ca3d3/ekart/${user._id}`)
        localStorage.removeItem(user.productname)
        items.removeChild(newli)
    }
    newli.appendChild(edit);
    
   
}
