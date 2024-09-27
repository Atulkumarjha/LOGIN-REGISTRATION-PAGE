import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {

    const [loginData,setLoginData] = React.useState({
        username:'',
        password:'',
    })

    const handleLoginSubmit = async(e) =>{
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:8000/login',loginData);
            const {success,message} = response.data;
            if(success){
                console.log('Login Successfull');     
            }else{
                console.log(message);
            }
        }
        
        catch(error){
          console.log(error);
            
        }
        setLoginData({
            username:'',
            password:'',
        })
    }

    const handleLoginChange = (e) =>{
        const {name,value} = e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleLoginSubmit}>
        <input type="text" name="username" placeholder="Username" value={loginData.username} onChange={handleLoginChange} required/>
        <input type="password" name="password" placeholder="Enter Password" value={loginData.password} onChange={handleLoginChange} required/>
        <button type="submit"></button>    
        <p>NOT REGISTER YET ? 
            <Link to = '/register'>REGISTER HERE</Link>
            </p>    
      </form>
    </div>
  )
}

export default LoginPage
