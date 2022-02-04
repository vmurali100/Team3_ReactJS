import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import AllUsers from './AllUsers';
import Home from './Home';
import Items from './Items';
import UsersReg from './UsersReg';
import User_login from './User_login';
export const Nav = () => {
    const [loginUser, setloginUser] = useState(null);
    useEffect(() => {
        let users = localStorage.getItem(("loginUser"), JSON.parse(loginUser))
        setloginUser(users)
    }, [])

    return <div>
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-link px-2 text-secondary"><Link to="">Home</Link></li>
                        <li className="nav-link px-2 text-white"><Link to="/items">Items</Link></li>
                        <li className="nav-link px-2 text-white"><Link to="/allUsers">All Users</Link></li>
                        <li className="nav-link px-2 text-white">FAQs</li>
                        <li className="nav-link px-2 text-white">About</li>
                    </ul>
                    {loginUser == null ?<> <div className="text-end">

                        <button type="button" className="btn btn-outline-light me-2"><Link to="/login">Login</Link></button>
                        <button type="button" className="btn btn-warning"><Link to="usersReg">Sign-up</Link></button>
                    </div> </>:
                     <><button type="button" className="btn btn-primary">{loginUser.userName}</button>
                     </>
                    }
                </div>
            </div>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="items" element={<Items />} />
            <Route path="login" element={<User_login />} />
            <Route path="usersReg" element={<UsersReg />} />
            <Route path="allUsers" element={<AllUsers />} />
        </Routes>

    </div>;
};
