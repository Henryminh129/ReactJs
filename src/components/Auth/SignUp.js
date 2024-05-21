import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiService'
import { toast } from 'react-toastify'


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const navigate = useNavigate()


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const handleSignUp = async () => {

        const isValidEmail = validateEmail(email);

        if (!isValidEmail) {
            toast.error('Invalid email')
            return;
        }
        if (!password) {
            toast.error('Invalid password')
            return;
        }
        if (!username) {
            toast.error('YOU ARE NO NAME???')
            return;
        }

        if (password !== passwordConfirm) {
            toast.error('check your password and confirm to make sure')
            return;
        }

        let data = await postRegister(email, username, password)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate('/')
        }


        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    const handleShowHidePassword = () => {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = 'text';
        } else {
            x.type = "password";
        }
    }

    const handleShowHideConfirmPassword = () => {
        let y = document.getElementById("confirm-password");
        if (y.type === "password") {
            y.type = 'text';
        } else {
            y.type = "password";
        }
    }

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div className='login-container'>
            <div className='header'>
                <span> Don't have an account yet?</span>
                <button onClick={() => handleLogin()}>Login</button>
            </div>
            <div className='title col-4 mx-auto'>

            </div>
            <div className='welcome col-4 mx-auto'>
                WELCOME TO MY WEBSITE BRO!
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    ></input>
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input
                        type={'username'}
                        className='form-control'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    ></input>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type={'password'} className='form-control' value={password} onChange={(event) => setPassword(event.target.value)} id='password'></input>
                    <input type='checkbox' onClick={() => handleShowHidePassword()}></input> show password
                </div>
                <div className='form-group'>
                    <label>Check password</label>
                    <input type={'password'} className='form-control' value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} id='confirm-password'></input>
                    <input type='checkbox' onClick={() => handleShowHideConfirmPassword()}></input> show password confirm
                </div>
                <div>
                    <button className='btn-submit' onClick={() => handleSignUp()}>Sign up</button>
                </div>
                <div className='text-center'>
                    <span onClick={() => { navigate('/') }} className='back'> &#60;&#60; Go to Homepage</span>
                </div>

            </div>
        </div>
    )
}

export default SignUp