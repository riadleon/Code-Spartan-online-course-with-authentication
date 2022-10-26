import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Login.css'


const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success('You have successfully logged in!!')
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (


        <form onSubmit={handleSubmit}>
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Log In</h4>
                                                    <div className="form-group">
                                                        <input type="email" name="email" className="form-style"
                                                            placeholder="Your Email" id="logemail" autocomplete="off" />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="password" className="form-style"
                                                            placeholder="Your Password" id="logpass" autocomplete="off" />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <button className="btn mt-4">Submit</button>
                                                    <p className="mb-0 mt-4 text-center"><Link to='/register' className="link">Do not have an account? </Link></p>
                                                    <p className="mb-0 mt-4 text-center">
                                                        {error}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>


    )
};

export default Login;