import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <center>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <Link class="navbar-brand" to="/">React Routing Application</Link>
                        </div>
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/post">Post</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                    </div>
                </nav>
            </center>
            <hr/>
        </>
    )
}
export default Header;