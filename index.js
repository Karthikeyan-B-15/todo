const input_field=document.querySelector("#input_text");
const add=document.querySelector("#addbtn");
const list=document.querySelector("#list_container");
const dellall=document.querySelector("#del");
const remitm=document.querySelector("#delcheck");
const save=document.querySelector("#save_list");
const show=document.querySelector("#show_list");
add.addEventListener('click',function(){
    let li=document.createElement('li');
    let check=document.createElement('input');
    check.setAttribute("type","checkbox");
    li.innerText=input_field.value;
    list.appendChild(li);
    li.appendChild(check);
    input_field.value="";
})

remitm.addEventListener('click',function(){
    let checkli=document.querySelectorAll('li');
    for(var x of checkli){
        if(x.querySelector('input').checked){
            list.removeChild(x);
        }
    }
   
})
dellall.addEventListener('click',function(){
    list.innerHTML="";
})
save.addEventListener('click',function(){
    let checkli=document.querySelectorAll('li');
    const arr=[];
    for(var x of checkli){
        if(x.querySelector('input').checked==true){
            arr.push(x.innerHTML);
            
          
        }
    }
    const mylist=JSON.stringify(arr);
    localStorage.setItem("mylist",mylist);
    alert("Unselected tasks are saved!!!");
    list.innerHTML="";
})
show.addEventListener('click',function(){
    
    const mylist=localStorage.getItem("mylist");
    const my_arr=JSON.parse(mylist);
    
     for(let x in my_arr){
        let li=document.createElement('li');
       
        li.innerHTML=my_arr[x];
        li.querySelector("input[type=checkbox]").checked=true;
         list.appendChild(li);

 }
        
    
   
})