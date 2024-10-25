
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import Welcome from "./Welcome";

const LoginForm = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false)

  const staticData ={
    name : "suparnaverma",
    password : "suparna"
  }
  const handleSubmit =(e : React.FormEvent)=>{
       e.preventDefault();
       if(name === staticData.name && password === staticData.password)
       {
        setisLoggedIn(true);
       }
       else
       {
        setisLoggedIn(false);
        alert("Invalid Username or Password. Please try again.");
       }
       
  }
  const handleLogout=()=>{
    setisLoggedIn(false);
    setname('');
    setpassword('');
  }
  return (
    <>
      <div> 
               
          {!isLoggedIn ? (<form className="size-96" onSubmit={handleSubmit}>
            <h1 className="mb-5 text-3xl">LOGIN</h1>
            <div className="mb-5" style={{ textAlign: "justify" }}>
              <Label>Username</Label>
              <Input
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              ></Input>
            </div>
            <div className="mb-5" style={{ textAlign: "justify" }}>
              <Label>Password</Label>
              <Input
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></Input>
            </div>
            <div className="mb-5" style={{ textAlign: "justify" }}>
              <Button type="submit">Submit</Button>
            </div>
          </form>)
          :<form className="size-96" onSubmit={handleLogout}>
            <Welcome />
            <Button type="submit">Logout</Button> 
           </form>}
        
      </div>
    </>
  );
};

export default LoginForm;
