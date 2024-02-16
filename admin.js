document.addEventListener("DOMContentLoaded", ()=>{
  
   var list=JSON.parse(localStorage.getItem("list"));
   if(list==null){
      list=[];
   };
   addlist();
   var info=JSON.parse(localStorage.getItem("info"));
   if(info==null){
       info={
         insta : "",
         facebook:"",
         gmail:"",
         cinfo:""
       }
   }
   

   document.querySelector(".top button").addEventListener("click",()=>{
      var val=document.querySelector("#insta");
      if(val.value==="")
      display("insta");
      else
      info.insta=val.value;

      val=document.querySelector("#gmail");
      if(val.value==="")
      display("Gmail");
      else
      info.gmail=val.value;

      val=document.querySelector("#facebook");
      if(val.value==="")
      display("facebook");
      else
      info.facebook=val.value;

      val=document.querySelector("#info");
      if(val.value==="")
      display("Conact info ");
      else
      info.cinfo=val.value;
       
      localStorage.setItem("info",JSON.stringify(info));

      console.log(JSON.parse(localStorage.getItem("info")))

   })


// the add button 
 document.querySelector(".bottom button").addEventListener("click", ()=>{
   
   let name=document.querySelector("#name");

   let date=document.querySelector("#date");
   
   let elink=document.querySelector("#link");
   
   let venu=document.querySelector("#venu");
   
   let contact=document.querySelector("#cinfo");
    

   if(name.value===""||date.value===""||elink.value===""||venu.value===""||contact.value===""){
      alert("insufficent data . PLEASE ENTER ALL THE FIELS ");
   }
      else{
   if(list==null){
      list=[];
   }
   list.push({name:name.value, date:date.value, elink:elink.value, venu:venu.value, contact:contact.value});
   

   localStorage.setItem("list",JSON.stringify(list));
   console.log(JSON.parse(localStorage.getItem("list")));
   name .value="";
   date .value="";
   elink .value="";
   venu .value="";
   contact .value="";
      }

     
      document.querySelector("ul").innerHTML="";
      addlist();

 })


//  the remove button
 document.addEventListener("click",(e)=>{
    if(e.target.tagName==="BUTTON" && e.target.parentElement.tagName==="LI"){
      console.log(e);
      let text=e.target.parentNode.firstChild.textContent    
      
      
      list=list.filter((ele)=>{
       
         let str= "Event Name:"+ ele.name  +"    Date:"+ele.date +"   venue:"+ele.venu +"    For further information contact: "+ele.contact ;
         console.log(text!==str)         
         return text!==str;
      })
      let ele= e.target.parentNode;
      ele.parentNode.removeChild(ele);
     localStorage.setItem("list",JSON.stringify(list));
    }
 })






// to add the list elements in the inner html
 function addlist(){
   for(let i=0;i<list.length;i++)
   {
     let str= "Event Name:"+ list[i].name  +"    Date:"+list[i].date +"   venue:"+list[i].venu +"    For further information contact: "+list[i].contact ;
     let ele=document.createElement("li");
     ele.innerHTML=str;
     console.log(ele);
     document.querySelector("ul").appendChild(ele )
     console.log(str);
     let button= document.createElement("button");
     button.innerHTML="Remove";
     ele.appendChild(button);
  }
}

})
// this will display the alert box
function display(str){
alert("Enter "+str+" field as it is Empty");
}
