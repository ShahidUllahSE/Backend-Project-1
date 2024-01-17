import React, { useState } from 'react';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/user/register", {
        name: fullName,
        email: email,
        password: password
      });

      // Assuming the response structure has an email property
      const registeredUserEmail = response.data.email;

      NotificationManager.success(`User ${registeredUserEmail} has been successfully registered`, "", 3000);
    } catch (err) {
      console.log(err);
      NotificationManager.error(err.response.data, '', 3000);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={(e) => register(e)}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="formName">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="formName"
                            className="form-control"
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="formEmail">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="formEmail"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="formPassword">
                            Password
                          </label>
                          <input
                            type="password"
                            id="formPassword"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="formRepeatPassword">
                            Address
                          </label>
                          <input
                            type="text"
                            id="formRepeatPassword"
                            className="form-control"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
