import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux';


const Login = (props) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const handleLogin = async () => {



        let data = await postLogin(email, password)
        if (data && data.EC === 0) {
            dispatch({
                type: 'FETCH_USER_LOGIN_SUCCESS',
                payload: data
            })
            toast.success(data.EM)
            navigate('/')
        }


        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    const handleShowHidePassword = () => {
        let x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = 'text';
        } else {
            x.type = "password";
        }
    }

    const handleSignUp = () => {
        navigate('/signup')
    }
    return (
        <div className='login-container'>
            <div className='header'>
                <span> Don't have an account yet?</span>
                <button onClick={() => handleSignUp()}>Sign up</button>
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
                    <input type={'password'} className='form-control' value={password} onChange={(event) => setPassword(event.target.value)} id='myInput'></input>
                    <input type='checkbox' onClick={() => handleShowHidePassword()}></input>Show Password
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