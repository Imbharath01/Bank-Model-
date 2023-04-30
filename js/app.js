document.querySelector("#signup").addEventListener("click", function(){
    document.querySelector("#head").style="display: none;";
    document.querySelector("#btntopic").style="display: none;";
    document.querySelector("#Signup").style="display: visible;";
    document.querySelector("#lowertopic").style="display: none;";
})

let data=[];
const userinfo = (ev)=>{
    ev.preventDefault(); 
    let userdata = {
        id: Date.now(),
        FirstName: document.getElementById('fname').value,
        LastName: document.getElementById('lname').value,
    }
    data.push(userdata);
    document.querySelector('form').reset();

    console.warn('added' , {data} );
    console.log(data);

    localStorage.setItem("User Data", JSON.stringify(data)) //saving to local storage
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("submitbtn").addEventListener("click", userinfo)

})

document.querySelector("#submitbtn").addEventListener("click", function(){
    document.querySelector("#popup").style="display: visible;";
})

document.querySelector("#home").addEventListener("click", function(){
    document.querySelector("#head").style="display: visible;";
})

function showPass(){
    var x = document.getElementById("sp1");
    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

