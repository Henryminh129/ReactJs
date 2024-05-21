import SideBar from "./SideBar";
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom"

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <Nav className="me-auto">

                        <FaBars onClick={() => setCollapsed(!collapsed)} className="FaBars" />
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to="/users" className='nav-link'>Users</NavLink>
                        <NavLink to="/admins" className='nav-link'>Admin</NavLink>
                    </Nav>
                </div>
                <div className="admin-main">
                    <Outlet />
                </div>

            </div>

        </div>
    )
}
export default Admin;