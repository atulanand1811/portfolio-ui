import React, { useState, useEffect } from 'react';
import About from "./About";
import Experience from "./Experience";
import Home from "./Home";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Works from "./Works";
import AppService from '../service/AppService';


function Main() {
    const [user, setUser] = useState(null);
    const pathname = window.location.pathname;
    let path = pathname.split("/")
    let portfolioId = path[path.length -1];
    console.log(portfolioId, user);
    
    useEffect(() => {
        async function fetchUser() {
            const userData = await AppService.getUsers(portfolioId);
            setUser(userData[0]);
        }

        fetchUser();
        
    }, [portfolioId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar user={user} />
            <Home user={user} />
            <About user={user} />
            <Experience user={user} />
            <Skills user={user} />
            <Works user={user} />
        </div>
    );
}

export default Main;