import React, {useState} from 'react'

const  UseStateObject = ()=> {

    const [formData, setFormData] = useState({
        username : "",
        email : "",
        password : "",
        confirm_password : "",
    });

const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
        return {...prev, [name] : value};
    });
};
    

  return (
    <div>
        <form action="">
            <div className='m-2'><input type="text" value={formData.username} onChange={handleInput} name="username" placeholder='Name' required /></div>
            <div className='m-2'><input type="email" value={formData.email} onChange={handleInput} name="email" placeholder='Email' required/></div>
            <div className='m-2'><input type="password" value={formData.password} onChange={handleInput} name="password" placeholder='Password'  /></div>
            <div className='m-2'><input type="password" value={formData.confirm_password} onChange={handleInput} name="confirm_password" placeholder='Confirm-Password' /></div>
            <div className='m-2'><button className="btn btn-primary">Create Account</button></div>

        </form>
        <div><p>{`My name is ${formData.username} and email is ${formData.email}`}</p></div>
        <hr />
    </div>
  )
}

export default UseStateObject
