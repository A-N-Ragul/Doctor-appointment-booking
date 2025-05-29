import React from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import "../styles/AdminLogin.css";

const AdminLogin = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const allowedEmail = "admin@gmail.com";
        const allowedPassword = "admin123";

        if (email === allowedEmail && password === allowedPassword) {
            navigate('/admin');
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'Welcome, Admin!',
                showConfirmButton: false,
                timer: 2000
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Access Denied',
                text: 'Admin Mail or Password does not match.',
            });
        }
    };

    return (
        <div className="admin-login-container">
            <form onSubmit={handleLogin} className="admin-login-form">
                <h2 className="form-title">Admin Login</h2>
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-input"
                    required
                />
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-input"
                    required
                />
                <button type="submit" className="form-button">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
