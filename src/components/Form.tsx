"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Form.module.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    mail: "",
    password: "",
  });

  const [fnameError, setFnameError] = useState<string>("");
  const [lnameError, setLnameError] = useState<string>("");
  const [mailError, setMailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    let success = 0;
    event.preventDefault();
    if (!data.mail) {
      setMailError("Email cannot be empty");
      toast.error("Email Empty!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else if (!validateEmail(data.mail)) {
      setMailError("Email address is not valid");
      toast.error("Email Invalid!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      setMailError("");
      success++;
    }

    if (!data.fname || data.fname == "") {
      setFnameError("First Name cannot be empty");
      toast.error("First Name Empty!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      setFnameError("");
      success++;
    }

    if (!data.lname || data.lname == "") {
      setLnameError("Last Name cannot be empty");
      toast.error("Last Name Empty!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      setLnameError("");
      success++;
    }
    if (!data.password || data.password == "") {
      setPasswordError("Password cannot be empty");
      toast.error("Password Error!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      setPasswordError("");
      success++;
    }
    if (success === 4) {
      const res = await fetch(
        "https://xitiz-intro-form-default-rtdb.firebaseio.com/introform.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fname: data.fname,
            lname: data.lname,
            mail: data.mail,
            password: data.password,
          }),
        }
      );
      if (res.ok) {
        setData({
          fname: "",
          lname: "",
          mail: "",
          password: "",
        });
        toast.success("Success!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  };
  const errorStyles = {
    border: "1px solid rgba(234, 56, 31,1)",
    backgroundImage: "url(/images/icon-error.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "95% 50%",
  };

  const normalStyles = {
    border: "3px solid hsl(246, 25%, 77%)",
    backgroundImage: "none",
  };
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      name="myform"
      autoComplete="off"
      method="post"
    >
      <input
        value={data.fname}
        onChange={handleChange}
        className={styles.input}
        style={fnameError ? errorStyles : normalStyles}
        type="text"
        name="fname"
        placeholder="First Name"
      />
      <span style={{ color: "red" }}>{fnameError}</span>
      <br />
      <input
        value={data.lname}
        onChange={handleChange}
        className={styles.input}
        style={lnameError ? errorStyles : normalStyles}
        type="text"
        name="lname"
        placeholder="Last Name"
      />
      <span style={{ color: "red" }}>{lnameError}</span>
      <br />
      <input
        value={data.mail}
        onChange={handleChange}
        className={styles.input}
        style={mailError ? errorStyles : normalStyles}
        type="text"
        name="mail"
        placeholder="Email Address"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
      <span style={{ color: "red" }}>{mailError}</span>
      <br />
      <input
        value={data.password}
        onChange={handleChange}
        className={styles.input}
        style={passwordError ? errorStyles : normalStyles}
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="off"
      />
      <span style={{ color: "red" }}>{passwordError}</span>
      <br />
      <button className={`${styles.submit} ${styles.input}`} type="submit">
        CLAIM YOUR FREE TRIAL
      </button>
      <br />

      <p style={{ color: "hsl(246, 25%, 77%)" }}>
        By clicking the button, you are agreeing to our
        <span style={{ color: "red", cursor: "pointer" }}>
          Terms and Services
        </span>
      </p>
      <ToastContainer />
    </form>
  );
}
