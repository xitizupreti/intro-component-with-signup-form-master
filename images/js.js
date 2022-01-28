
function empty(){
const fname=document.myform.fname.value; 
const lname=document.myform.lname.value;
const mail=document.myform.mail.value;   
const password=document.myform.password.value;

const styles={
    "border":"2px solid hsl(0, 100%, 74%)",
    "background-image":"url(./images/icon-error.svg)",
    "background-repeat":"no-repeat",
    "background-position":"95% 50%"
}

    if (fname=="" || fname==null){
      const f=document.getElementById('fname');
      Object.assign(f.style,styles);
    }
    if(lname==null || lname==""){
        const l=document.getElementById('lname');
        Object.assign(l.style,styles);
    }
    if(mail=="" || mail==null){
        const m=document.getElementById('mail');
        Object.assign(m.style,styles);
    }
    if(password=="" || password==null){
        const p=document.getElementById('password');
      Object.assign(p.style,styles);
    }
}