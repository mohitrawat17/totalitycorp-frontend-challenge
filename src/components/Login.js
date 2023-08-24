import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [username, setUsername] = useState("");
  const[userFlag,setUserFlag]=useState(false)
  const [password, setPassword] = useState("");
  const[userPassword,setuserPassword]=useState(false)
const navigate=useNavigate()

  const handleSignin=(e)=>{
    e.preventDefault();
    
    let user=localStorage.getItem("Username").replace(/"/g,"");
    let pass=localStorage.getItem("Password").replace(/"/g,"");
    // console.log(mail,pass);

    if(username.length==0){
       setUserFlag(true);
    }
     if(password.length==0){
       setuserPassword(true);
    }
   
    else{
        if(user==username && password==pass){
            navigate("/home")
        }
        else{
            alert('invalid username or Password');

        }
    }
  }


  return (
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
      <button onClick={handleSignin} className="hover:bg-yellow-500 border px-2 rounded-xl py-[2px] ">Login</button>
    </div>
  </form>
  </div>
  )
}

export default Login
