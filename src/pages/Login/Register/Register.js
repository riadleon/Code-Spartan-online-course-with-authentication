import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip'
import { Tooltip } from 'react-bootstrap';
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../../../firebase/firebase.config';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail, providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Google logged in successfully')
            })
            .catch(error => console.error(error))
    }

    const gitProvider = new GithubAuthProvider();
    const auth = getAuth(app)

    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                const user = result.user;
                toast.success('Github logged in successfully')
                console.log(user);
            })
            .catch(error => console.error(error))


    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    // const handleAccepted = event => {
    //     setAccepted(event.target.checked)
    // }

    return (
        <form onSubmit={handleSubmit}>
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Register</h4>
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-style"
                                                            placeholder="Your Name" id="logname" autocomplete="off" />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="text" name="photoURL" className="form-style"
                                                            placeholder="Add Your Photo" id="logname" autocomplete="off" />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="email" name="email" className="form-style"
                                                            placeholder="Enter Email" id="logmail" autocomplete="off" required />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="password" className="form-style"
                                                            placeholder="password" id="logpass" autocomplete="off" required />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <button className="btn mt-4">Register</button>
                                                    <p className="mb-0 mt-4 text-center"><Link to='/login' className="link">Already Have an account? </Link></p>
                                                    <p className="mb-0 mt-4 text-center">
                                                        {error}
                                                    </p>
                                                    <div className='flex'>
                                                        <button onClick={handleGoogleSignIn} className="btn btn-primary mb-14 mr-6 " data-tip="Sign with Google"><FaGoogle></FaGoogle></button>
                                                        <button onClick={handleGithubSignIn} className="btn btn-primary mb-14  mr-14" data-tip="Sign with github"><FaGithub></FaGithub></button>
                                                        <Tooltip></Tooltip>
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
            </div>
        </form>

    );
};

export default Register;