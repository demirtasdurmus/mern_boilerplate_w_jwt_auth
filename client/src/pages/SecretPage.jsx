import React from 'react';
import '../assets/styles/Landing.css';
import Navbar from "../components/Navbar";


export default function SecretPage() {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.assign('/login');
    }
    return (
        <div>
            <Navbar />
            <div className="Landing">
                <header className="Landing-header">
                    <h2>This is my Secret Page</h2>
                </header>
                <div className="Landing-info">
                    <p>You can't see this page unless you are logged in!</p>
                </div>
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
        </div>

    );
};
