addEventListener("DOMContentLoaded",()=>{
console.log(localStorage.getItem("list"));
var list=JSON.parse(localStorage.getItem("list"));
var ele=document.querySelector("ul");
if(list.length===0){
    let h1=document.createElement('h1')
    h1.textContent="OOPS !!! as of now we dont have any events"
    document.querySelector("body").appendChild(h1)
    let h2=document.createElement('h2');
    h2.textContent="we will be having new events sooner !!!"
    document.querySelector("body").appendChild(h2)
}
else{
for(let i=0;i<list.length;i++){
   
    var li=document.createElement('LI');
    let str= "Event Named \""+ list[i].name  +"\" will be conducted on "+list[i].date +" at "+list[i].venu +" .   For further information contact: "+list[i].contact ;
     

    li.innerHTML=str;
    let a = document.createElement('a');
    let button = document.createElement("button");
    button.textContent="JOIN"
    a.setAttribute('href',list[i].elink)
    a.appendChild(button);
     
    li.appendChild(a);
   
    ele.appendChild(li);
} 
}
})