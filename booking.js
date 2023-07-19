var item=document.getElementById("form")

form.addEventListener('submit',addItem)

function addItem(e){
    e.preventDefault();
    var name=document.getElementById('form1').value;
    var phonenumber=document.getElementById('form2').value;
    var email=document.getElementById('form3').value;


    myobj={name:[name],phnno:[phonenumber],email:[email]}
    myobj1=JSON.stringify(myobj)
    localStorage.setItem('myobj',myobj1)

    myobj=localStorage.getItem('myobj')
    my=JSON.parse(myobj)
    my.name.push(name)
    localStorage.setItem('myobj',my)

  

}
