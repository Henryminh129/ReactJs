import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService'
import { toast } from 'react-toastify'


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const handleLogin = async (email, password) => {

        const isValidEmail = validateEmail(email);

        if (!isValidEmail) {
            toast.error('Invalid email')
            return;
        }
        if (!password) {
            toast.error('Invalid password')
            return;
        }

        let data = await postLogin(email, password)
        if (data && data.EC === 0) {
            toast.success('create successfully')
        }


        if (data && data.EC !== 0) {
            toast.error('user have already exsited')
        }
    }
    return (
        <div className='login-container'>
            <div className='header'>
                <span> Don't have an account yet?</span>
                <button>Sign up</button>
            </div>
            <div className='title col-4 mx-auto'>

            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
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
                    <label>Password</label>
                    <input type={'password'} className='form-control' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <span>Forgot password?</span>
                <div>
                    <button className='btn-submit' onClick={() => handleLogin()}>Login to</button>
                </div>
                <div className='text-center'>
                    <span onClick={() => { navigate('/') }} className='back'> &#60;&#60; Go to Homepage</span>
                </div>

            </div>

        </div>
    )
}

export default Login;