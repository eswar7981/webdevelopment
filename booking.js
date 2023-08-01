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

    obj={
        name,email,phonenumber
    }

    axios.post("https://crudcrud.com/api/b04a13ea95a0453090102eabd397ce3b/appointmentdata",obj)
    .then((res) =>
    console.log(res))
    .catch((err)=>
    console.log(err))

    
    const delbutton=document.createElement('input');
    delbutton.type='button'
    delbutton.value="Delete"
    delbutton.onclick=() =>{
        localStorage.removeItem(name)
        axios.get("")
        axios.delete("https://crudcrud.com/api/b04a13ea95a0453090102eabd397ce3b/appointmentdata/")
        itemList.removeChild(newli)
    }
     
    newli.appendChild(delbutton);
    const edit=document.createElement('input');
    edit.type='button'
    edit.value="Edit"
    edit.onclick=() =>{
      
        var s=document.getElementById("form")
        var abc=localStorage.getItem(name)
        console.log(abc)
        abc=JSON.parse(abc)
        s[0].value=abc['name']
        s[1].value=abc["phonenumber"]
        s[2].value=abc["email"]
       


        localStorage.removeItem(name)
        itemList.removeChild(newli)
    }
    newli.appendChild(edit);
    
   


  

}


window.addEventListener("DOMContentLoaded",() =>{
    axios.get("https://crudcrud.com/api/b04a13ea95a0453090102eabd397ce3b/appointmentdata")
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
    var temp=user.name+' '+user.phonenumber+" "+user.email+" "+user._id
    newli.appendChild(document.createTextNode(temp));
    itemList.appendChild(newli)
    const delbutton=document.createElement('input');
    delbutton.type='button'
    delbutton.value="Delete"
    delbutton.onclick=() =>{
        axios.delete(`https:/crudcrud.com/api/b04a13ea95a0453090102eabd397ce3b/appointmentdata/${user._id}`)
        itemList.removeChild(newli)
    }
     
    newli.appendChild(delbutton);
    const edit=document.createElement('input');
    edit.type='button'
    edit.value="Edit"
    edit.onclick=() =>{
        var s=document.getElementById("form")
        s[0].value=user.name
        s[1].value=user.phonenumber
        s[2].value=user.email
        s[3].value=user._id
       


        localStorage.removeItem(user.name)
        itemList.removeChild(newli)
    }
    newli.appendChild(edit);
    
   
}
