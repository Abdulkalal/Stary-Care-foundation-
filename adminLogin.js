document.addEventListener("DOMContentLoaded", ()=>{

    var username =document.querySelector("#Username");
    var password =document.querySelector("#Password");
    localStorage.setItem("username","user");
    localStorage.setItem("password","pass");
    document.querySelector("#login").addEventListener( "click",()=>{
        if(username.value==="" || password.value===""){
            alert("Eneter username and password");
        }
        const user=localStorage.getItem("username");
        const pass=localStorage.getItem("password");
        console.log(user+pass)
         if(username.value ===user && password.value ===pass){
            window.location.href = "admin.html";
         }
         else{
            alert("invalid username or password");
         }
    }
)
})