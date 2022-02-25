import React from 'react'
import './ErrorPage.scss'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='error-page'>
            <h1>"If everything I did failed — which it doesn't, it actually succeeds — just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try."</h1>
              <div class="page-wrapper">
                <div class="needle-wrapper">
                  <div class="base"></div>
                  <div class="lines">
                    <div class="vertical"></div>

                    <div class="horizontal"></div>
                  </div>
                </div>
                <div class="disk-wrapper">
                  <div class="light-left"></div>
                  <div class="light-right"></div>
                  <div class="disk">
                    <div class="half-circle-top"></div>
                    <div class="half-circle-bottom"></div>
                    <div class="separator"></div>
                    <div class="inner-circle">
                      <span>4</span>
                      <div class="dot"></div>
                      <span>4</span>
                    </div>
                  </div>
                </div>
              </div>
            <div class="error">Uh oh! Looks like we've skipped a beat </div>
            <Link to="/dashboard"> Back to Home</Link>
        </section>

    )
}

export default ErrorPage
