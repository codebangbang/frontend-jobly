import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        <Link to="/login" className="btn btn-primary font-weight-bold mr-2">
          Login
        </Link>
        <Link to="/signup" className="btn btn-primary font-weight-bold">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Homepage;