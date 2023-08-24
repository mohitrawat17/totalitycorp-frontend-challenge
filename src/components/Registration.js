import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Login from "./Login";

const Registration = () => {
  const [username, setUsername] = useState("");
  const[userFlag,setUserFlag]=useState(false)

  const [email, setEmail] = useState("");
  const[userMail,setUserMail]=useState(false)

  const [password, setPassword] = useState("");
  const[userPassword,setuserPassword]=useState(false)

  const[flag,setFlag]=useState(false);
  const[login,setLogin]=useState(false);
//   console.log(username, email, password);


  

  const handleSignin=(e)=>{
    e.preventDefault();
    if(username.length==0){
       setUserFlag(true);
       setFlag(true);
    }
     if(email.length==0){
       setUserMail(true);
       setFlag(true);
    }
     if(password.length==0){
       setuserPassword(true);
       setFlag(true);
    }

    else{
        setFlag(false);
        localStorage.setItem("Username",JSON.stringify(username))
        localStorage.setItem("Email",JSON.stringify(email))
        localStorage.setItem("Password",JSON.stringify(password))
        setLogin(!login)
    }
    
  }


  return (
    
<>
    {login ? (<Login/>) : (
        <div className="flex flex-col justify-center items-center h-screen">
        <form className="bg-white text-gray-700 mb-3 shadow-xl p-5">
        {/* username */}
        <div className="border-b-2 mb-4">
          <PersonIcon />
          <input
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="ml-2 w-72 outline-none"
            type="text"
          />
        </div>
         {userFlag && <div className="-mt-3 mb-3 text-red-600">Username is required</div>}

        {/* email */}
        <div className=" border-b-2 mb-4">
          <EmailIcon />
          <input
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="ml-2 w-72 outline-none"
            type="text"
          />
        </div>
        {userMail && <div className="-mt-3 mb-3 text-red-600">Email is required</div>}

        {/* password */}
        <div className="border-b-2 mb-4">
          <LockIcon />
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="ml-2 w-72 outline-none"
            type="text"
          />
        </div>
        {userPassword && <div className="-mt-3 mb-3 text-red-600">Password is required</div>}

        <div className="flex justify-center">
          <button onClick={handleSignin} className="hover:bg-yellow-500 border px-2 rounded-xl py-[2px] ">Sign In</button>
        </div>
      </form>
      <div onClick={()=>setLogin(!login)} className="cursor-pointer">Already registered ? login here</div>
      </div>
      ) }
      </>
  );
};

export default Registration;
