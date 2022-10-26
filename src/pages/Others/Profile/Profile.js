import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = event => {
        setName(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="section">
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center py-5">
                            <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <div class="form-group mt-2">
                                                        <input readOnly defaultValue={user?.email} type="email" name="email" class="form-style"
                                                            placeholder="Enter Email" id="logmail" autocomplete="off" required />
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input onChange={handleNameChange} defaultValue={name} type="text" name="name" class="form-style"
                                                            placeholder="Your Name" id="logname" autocomplete="off" />
                                                        <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input ref={photoURLRef} defaultValue={user?.photoURL} type="text" name="photoURL" class="form-style"
                                                            placeholder="Add Your Photo" id="logname" autocomplete="off" />
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>

                                                    <button class="btn mt-4">Update</button>
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

export default Profile;