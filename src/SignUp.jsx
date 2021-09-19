
import React,  { useState } from 'react';

function SignUp () {
    const [user, setUser] = useState({ name:"", username:"", password:""});
    let name , value;
    const handleinput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value})
    };

    const PostData = async (e) => {
      e.preventDefault();
      const { name, username, password } = user;
      console.log(user);
      const res = await fetch("/Register", {
        method: "POST", 
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({ 
          name, username, password
        })
      });
      const rep = await res.json();
      if(rep.status === 402 || !rep)
      {
        window.alert("invalid reg")
        console.log("dfdfd")
      } else {
        window.alert("success")
        console.log("success")
      }
    }

    return (
        <>
        <div className="Form" method="POST"> 
        <h1>Form</h1> 
        <label> Name : </label>
        <input type="text" name="name" required value={user.name} onChange={handleinput} ></input>
        <label> Username or Email : </label>
        <input type="text" name="username" required value={user.username} onChange={handleinput}></input>
        <label> password : </label>
        <input type="password" name="password" required value={user.password} onChange={handleinput}></input>
        <input type="submit" className="submit" onClick={PostData}></input>
        </div>
        </>
    )
};


export default SignUp;
