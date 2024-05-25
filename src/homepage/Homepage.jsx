import React, {useContext } from 'react';
import { Link } from 'react-router-dom';
// import './Homepage.css';
// import UserContext from '../auth/UserContext';

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        {currentUser ? (
          <h2>Welcome Back, {currentUser.firstName || currentUser.username}!</h2>
        ) : (
          <h2>Welcome to Jobly</h2>
        )}
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