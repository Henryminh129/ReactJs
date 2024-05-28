import { BrowserRouter, Route, Routes } from "react-router-dom"
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUsers from './components/Admin/content/ManageUsers';
import Login from './components/Auth/Login';
import Dashboard from './components/Admin/content/DashBoard';
import App from './App';
import { ToastContainer, toast } from 'react-toastify'
import SignUp from "./components/Auth/SignUp";
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";

const NotFound = () => {
    return (
        <div className="container mt-3 alert alert-danger">
            404 Not fount data with your current URL
        </div>
    )
}

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='/users' element={<ListQuiz />} />
                </Route>
                <Route path='/quiz/:id' element={<DetailQuiz />} />
                <Route path='/admins' element={<Admin />} >
                    <Route index element={<Dashboard />} />
                    <Route path='manage-users' element={<ManageUsers />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </>
    )
}

export default Layout