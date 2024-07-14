import React from 'react';
import { NavLink } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    
    <div className='container'>
        <div>
            <h2>404</h2>
            <h2>UH OH! You're Lost</h2>
            <p>The page you are looking for doesn't exist.
                Go to the Home page of the website by clicking the below button.
            </p>

            <NavLink to='/'>
            <button>Go back to Home</button>
            </NavLink>
        </div>
        
    </div>
  )
}

export default ErrorPage;