

function empty(){
var fname=document.myform.fname.value; 
var lname=document.myform.lname.value;
var mail=document.myform.mail.value;   
var password=document.myform.password.value;

var styles={
    "border-color":"red",
    "border-style":"solid",
    "border-width":"3px"
}

    if (fname=="" || fname==null){
      var f=document.getElementById('fname');
      Object.assign(f.style,styles);
    }
    if(lname==null || lname==""){
        var l=document.getElementById('lname');
        Object.assign(l.style,styles);
    }
    if(mail=="" || mail==null){
        var m=document.getElementById('mail');
        Object.assign(m.style,styles);
    }
    if(password=="" || password==null){
        var p=document.getElementById('password');
      Object.assign(p.style,styles);
    }
}