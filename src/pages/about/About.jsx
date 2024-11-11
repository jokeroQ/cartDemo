import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function About(){
    return (
        <div className="About">About
            <Link to="/gameTest">小游戏？</Link>
        </div>
    )
}
export default About;