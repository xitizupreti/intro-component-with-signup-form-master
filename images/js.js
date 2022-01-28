function empty() {
  const fname = document.myform.fname.value;
  const lname = document.myform.lname.value;
  const mail = document.myform.mail.value;
  const password = document.myform.password.value;

  const styles = {
    border: '2px solid hsl(0, 100%, 74%)',
    'background-image': 'url(./images/icon-error.svg)',
    'background-repeat': 'no-repeat',
    'background-position': '95% 50%',
  };
  const normalStyle = {
    border: '2px solid hsl(246, 25%, 77%)',
  };
  const allInput = document.getElementsByTagName('input');
  for (var i = 0; i < allInput.length; i++) {
    if (allInput[i]?.value == '' || allInput[i]?.value == null) {
      Object.assign(allInput[i].style, styles);
    } else {
      Object.assign(allInput[i].style, normalStyle);
    }
  }

  //   if (fname == '' || fname == null) {
  //     const f = document.getElementById('fname');
  //     Object.assign(f.style, styles);
  //   } else {
  //     const f = document.getElementById('fname');
  //     Object.assign(f.style, normalStyle);
  //   }
  //   if (lname == null || lname == '') {
  //     const l = document.getElementById('lname');
  //     Object.assign(l.style, styles);
  //   } else {
  //     const f = document.getElementById('lname');
  //     Object.assign(f.style, normalStyle);
  //   }
  //   if (mail == '' || mail == null) {
  //     const m = document.getElementById('mail');
  //     Object.assign(m.style, styles);
  //   } else {
  //     const f = document.getElementById('mail');
  //     Object.assign(f.style, normalStyle);
  //   }
  //   if (password == '' || password == null) {
  //     const p = document.getElementById('password');
  //     Object.assign(p.style, styles);
  //   } else {
  //     const f = document.getElementById('password');
  //     Object.assign(f.style, normalStyle);
  //   }
}
