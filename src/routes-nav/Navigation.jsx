import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="Navigation">
        <h1>Navigation</h1>
        <ul>
            <li>
            <Link to="/companies">Companies</Link>
            </li>
            <li>
            <Link to="/jobs">Jobs</Link>
            </li>
        </ul>
        </div>
    );
    }

export default Navigation;