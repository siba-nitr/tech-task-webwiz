let eventtarget=document.getElementById('btn1');

function login(){
    confirm("YOU HAVE LOGGED IN!");
} 

// let eventtarget=document.getElementById('btn2'); 

// function forgotpassword(){
//     confirm("HAVE YOU FORGOTTEN YOUR PASSWORD??....DONT WORRY WE WILL HELP YOU TO RESET IT!!")
// } 

let btntarget=document.getElementById('btn2');

function forgot(){
    confirm("YOU HAVE FORGOTTEN YOUR PASSWORD");
    confirm("DONT WORRY YOU CAN RESET YOUR PASSWORD!")
    prompt("ENTER YOUR RECOVERY EMAIL-ID:")
} 

let bttnTarget=document.querySelector("#bttn") 
bttnTarget.addEventListener('click',()=>{
    document.body.style.backgroundColor="#FFFF00"
})