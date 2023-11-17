import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { provider, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
  const navigate=useNavigate();
  const loginInWithGoogle=()=>{  
  signInWithPopup(auth,provider).then((result)=>{
  localStorage.setItem("IsAuth", true);
  setIsAuth(true);
  navigate("/");
  })

  }
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログインする</button>
    </div>
  )
}

export default Login