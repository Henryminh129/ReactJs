import videoHomePage from '../assets/video-homepage.mp4'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const account = useSelector(state => state.user.account);
    const navigate = useNavigate()

    return (
        <div className="homepage-container">
            <div>
                <div className='homepage-video'>
                    <video autoPlay muted loop>
                        <source src={videoHomePage} type="video/mp4" />
                    </video>
                </div>

                <div className='homepage-content'>
                    <div className='title-1'>There's a better way to ask</div>
                    <div className='title-2'>You don't want to make a boring form.
                        And your audience won't answer one.
                        Create typeform instead - and make everyone happy.</div>
                    <div className='title-3'>
                        {isAuthenticated === false ?
                            <button onClick={() => navigate('/login')}>Get's started. It's free</button> :
                            <button onClick={() => navigate('/users')}>Doing Quiz Now</button>}
                    </div>
                </div>
            </div>

        </div>

    )
}

export default HomePage;