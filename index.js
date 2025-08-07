let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    
    console.log(inp.value);
    let item=document.createElement("li");
     item.innerText=inp.value;
    let btn1=document.createElement("button");
    btn1.innerText="Delete";
    btn1.classList.add("delete");
    item.appendChild(btn1);
   
   ul.appendChild(item);
   inp.value="";
    
});

ul.addEventListener("click",function(event){
    //  console.log(event.target);
     if(event.target.nodeName=="BUTTON"){
        let list=event.target.parentElement;
        list.remove();
        console.log("delete");
     }
})
 
