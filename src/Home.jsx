import React, { useState } from 'react';
import './Home.css'
import { NavLink, useHistory } from "react-router-dom"

function Home() {
  const history = useHistory();
  const [username,  setUsername] = useState({username:""})
  const [password, setPassword] = useState({password:""})

  const Login = async (e) => {
  const res = await fetch('/SignIn', {
    method: "POST",
    headers: {"Content-Type" : "application/json"},    
    body: JSON.stringify({
      username, password
    })
  });
  const rep = res.json();
  if(rep.status === 400 || !rep)
      {
        window.alert("invalid reg")
        console.log("dfdfd")
      } else {
        window.alert("success")
        history.push("/Welcome")
      }
}
  return (
    <>
    <div className="body">
    <body>
    <div className="wrapper">
      <div className="left">
      <div className="signin">
      <div className="logo">
        <img src="/Images/Project.jpg" alt="AnimeWorld" />
        </div>
        <form method="POST">
          <div>
            <label>Email or Username</label>
            <input type="text" className="text-input" name="Email" required value={username} onChange={(e) => setUsername(e.target.value)}></input>
          </div>
          <div>
              <label>Password</label>
              <input type="password" name="password" className="text-input" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="primary-btn" onClick={Login}>Sign In</button>
        </form>
        <div className="links">
                    <NavLink to="#">Forgot Password</NavLink>
                </div>
                <div className="or">
                    <hr className="bar" />
                    <span>OR</span>
                    <hr className="bar" />
                </div>
                <NavLink to="/SignUp">Create Account</NavLink>
      </div>
      <footer className="main-footer">
                <p>Copyright &copy; 2021, Anime World All Right Reserved</p>
                <div>
                    <NavLink to>terms of use</NavLink>
                </div>
            </footer>
      </div>
      <div className="right">
            <div className="showcase">
                <div className="showcase-content">
                    <NavLink to="#" className="showcase-text">Anime is Life, Feel it</NavLink>
                    <NavLink to="#" className="secondary-btn">Start your 10 day trail</NavLink>
                </div>
            </div>
        </div>
      </div>
      </body>
      </div>
    </>
  );
}

export default Home;
