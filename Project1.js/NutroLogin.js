import React from 'react';

function NurtroLogin() {
  return (
    <div className="container my-5 gradient-form">
      <div className="row">
        <div className="col-6 mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="https://api.logo.com/api/v2/images?logo=logo_a05b3146-288c-4b82-9374-efbef34a2a76&format=webp&width=2000&primary=%23000000&secondary=%23000000&accent=%23000000&background=transparent&tertiary=%23000000&quaternary=%23ffffff&fit=contain&quality=100&u=2024-08-29T14%3A55%3A36.863Z"
                style={{ width: '185px' }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
            </div>

            <p>Please login to your account</p>

            <div className="mb-4">
              <label htmlFor="form1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="form1"
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="form2" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="form2"
                className="form-control"
              />
            </div>

            <div className="text-center pt-1 mb-5 pb-1">
              <button className="btn btn-primary mb-4 w-100">
                Sign in
              </button>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <button className="btn btn-outline-danger mx-2">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="col-6 mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NurtroLogin;
