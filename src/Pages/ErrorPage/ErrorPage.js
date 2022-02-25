import React from 'react'
import './ErrorPage.scss'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='error-page'>
            <h1>"If everything I did failed — which it doesn't, it actually succeeds — just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try."</h1>
            <p>Way to try. But you failed. Try again.</p>
            <Link to="/dashboard"> Back to Home</Link>
        </section>

    )
}

export default ErrorPage
