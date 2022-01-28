

function empty(){
var fname=document.myform.fname.value; 
var lname=document.myform.lname.value;
var mail=document.myform.mail.value;   
var password=document.myform.password.value; 

const border = () =>{
    input.forEach((field)=>{
        field.style.border ="2px solid hsl(0, 100%, 74%)";
    }
)};

    if (fname=="" || fname==null){
       border();
    }
    if(lname==null || lname==""){
        border();
    }
    if(mail=="" || mail==null){
        border();
    }
    if(password=="" || password==null){
        border();
    }
}