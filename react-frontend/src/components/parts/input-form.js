import React from 'react';
import {Link} from "react-router-dom";

const InputForm = ({title, employee, errors, onSubmitForm, handleInputChange}) => {

    const {firstName, lastName, city, address, telephone} = employee;
    const {firstNameError, lastNameError, cityError, addressError, telephoneError} = errors;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center mt-3">{title}</h3>
                    <div className="card-body">
                        <form onSubmit={onSubmitForm}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className={firstNameError ? "form-control is-invalid" : "form-control"}
                                    value={firstName}
                                    onChange={handleInputChange}/>
                                <div className="invalid-feedback">{firstNameError}</div>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className={lastNameError ? "form-control is-invalid" : "form-control"}
                                    value={lastName}
                                    onChange={handleInputChange}/>
                                <div className="invalid-feedback">{lastNameError}</div>
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    className={cityError ? "form-control is-invalid" : "form-control"}
                                    value={city}
                                    onChange={handleInputChange}/>
                                <div className="invalid-feedback">{cityError}</div>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    className={addressError ? "form-control is-invalid" : "form-control"}
                                    value={address}
                                    onChange={handleInputChange}/>
                                <div className="invalid-feedback">{addressError}</div>
                            </div>
                            <div className="form-group">
                                <label>Telephone</label>
                                <input
                                    type="text"
                                    name="telephone"
                                    className={telephoneError ? "form-control is-invalid" : "form-control"}
                                    value={telephone}
                                    onChange={handleInputChange}/>
                                <div className="invalid-feedback">{telephoneError}</div>
                            </div>
                            <input type="submit" className="btn btn-success" value="Save"/>
                            <Link to={"/"}>
                                <button className="btn btn-danger">Cancel</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputForm;