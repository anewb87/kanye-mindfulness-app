import React from 'react';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <section className='error-page'>
      <h1>"If everything I did failed — which it doesn't, it actually succeeds — just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try."</h1>
      <div className="page-wrapper">
        <div className="needle-wrapper">
          <div className="base"></div>
          <div className="lines">
            <div className="vertical"></div>
            <div className="horizontal"></div>
          </div>
        </div>
        <div className="disk-wrapper">
          <div className="light-left"></div>
          <div className="light-right"></div>
          <div className="disk">
            <div className="half-circle-top"></div>
            <div className="half-circle-bottom"></div>
            <div className="separator"></div>
            <div className="inner-circle">
              <span>4</span>
              <div className="dot"></div>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
      <div className="error">Uh oh! Looks like we've skipped a beat, but let's try again. </div>
      <Link to="/dashboard" className='home-button'>To Dashboard</Link>
    </section>
  )
};


export default ErrorPage
