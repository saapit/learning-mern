import React from 'react'
import { LoginBg } from '../../assets';
import { Button, Input, Gap, Link } from '../../components';

const Login = () => {
    return (
        // sebab class name SCSS sama dgn register, jadi its global call "main-page"
        <div className="main-page"> 
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="imageBg"/>
            </div>
            <div className="right">
            <p className="title">Login</p>
            <Input label="Email" placeholder="Email"/>
            <Gap height={10}/>
            <Input label="Password" placeholder="Password"/>
            <Gap height={50}/>
            <Button title="login"/>
            <Gap height={100}/>
            <Link title="Dont have account? Click here to register"/>
            </div>
        </div>
    )
}

export default Login
