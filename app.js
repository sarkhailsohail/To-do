
const arr=[];
        const todo=document.querySelector('#todo');
        const ol=document.querySelector('ol');

const todoApp=function(){
    
    
   if(todo.value!=""){
      arr.push(todo.value);
   }
   else{
    alert("Cannot be empty");
   }
   todo.value='';
   renderTodo();
  
}

function renderTodo(){
    ol.innerHTML='';
    for (let i = 0; i < arr.length; i++) {
    ol.innerHTML+=`<li class="list"><div><p >${i+1}) ${arr[i]}</p></div><div class="btn"> <button style="background-color:green;" onclick="editConfirm(${i})">Edit</button><button style="background-color:red;" onclick="deleteWar(${i})">Delete</button></div></li>`;
      
   }
}
function editConfirm(index){
    const a= document.querySelector('.edit1');
    a.style.display='flex';
    a.innerHTML+=`<div class="head"><h2>Edit Confirmation</h2></div>
    <div class="para"> <p>Ary you sure you want to edit :</p></div>
     <div class="input">
         <input type="text" id="input" placeholder="Enter the value to edit" >    
     </div>
     <div class="edit-btn">
         <div class="btn"> <button style="background-color:red;" onclick="notShow1()" >No</button><button style="background-color:green;" onclick="editFunc(${index})" >Yes</button>
 </div></div>`

}
function notShow1(){
    const f= document.querySelector('.edit1');
    f.style.display='none';
    f.style.direction='column';
    f.innerHTML='';
    
   }
function editFunc(index){
    const n=document.querySelector('#input').value;
    if(n!="" && n!=null){
   arr[index]=n;

    }
    else{
        alert("Please enter some value");
    }

   renderTodo();
   notShow1();
}
function deleteWar(index){
const a = document.querySelector('.edit');

    a.style.display='flex';
    a.style.direction='column'
    a.innerHTML+=`<div class="head"><h2>Delete Confirmation</h2></div>
    <div class="icon"><i class="fa-solid fa-circle-exclamation"></i></div>
   <div class="para"> <p>Ary you sure you want to delete?</p></div>
    <div class="edit-btn">
        <div class="btn"> <button style="background-color:red;" onclick="notShow()" >No</button><button style="background-color:green;" onclick="deleteFunc(${index})" >Yes</button>
</div></div>`;
  

}
function notShow(){
    const a = document.querySelector('.edit');
    a.style.display='none';
    a.innerHTML="";
}

function deleteFunc(index){
    console.log("delete");
   arr.splice(index,1);
   renderTodo();
   notShow();
}

function deleteAll(){
    console.log('hd');
    arr.splice(0,arr.length);
    renderTodo();
    notShow();
}
function deleteAllConfirm() {
    if(arr.length==0){
        alert("Already Empty");
    }
    else{
    const a = document.querySelector('.edit');

    a.style.display='flex';
    a.style.direction='column'
    a.innerHTML+=`<div class="head"><h2>Delete Confirmation</h2></div>
    <div class="icon"><i class="fa-solid fa-circle-exclamation"></i></div>
   <div class="para"> <p>Ary you sure you want to delete All?</p></div>
    <div class="edit-btn">
        <div class="btn"> <button style="background-color:red;" onclick="notShow()" >No</button><button style="background-color:green;" onclick="deleteAll()" >Yes</button>
</div></div>`;}
}
 

