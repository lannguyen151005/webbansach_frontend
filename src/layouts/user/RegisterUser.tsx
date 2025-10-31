import { error } from "console";
import React, { useState } from "react";

function RegisterUser() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [sex, setSex] = useState("1");

    const [announce, setAnnounce] = useState("");

    const [errorUsername, setErrorUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorRepeatPassword, setErrorRepeatPass] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        //Tranh reload lai form khi click lien tuc
        e.preventDefault();

        const isUsernameValid = username !== "" && errorUsername === "";
        const isPasswordValid = password !== "" && errorPassword === "";
        const isEmailValid = email !== "" && errorEmail === "";
        const isRepeatPassValid = repeatedPassword !== "" && errorRepeatPassword === "";

        if (
            isUsernameValid &&
            isPasswordValid &&
            isEmailValid &&
            isRepeatPassValid
        ) {
            try {
                const url = "http://localhost:8080/account/register";

                const response = await fetch(url,
                    {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(
                            {
                                username: username,
                                email: email,
                                password: password,
                                lastName: lastName,
                                firstName: firstName,
                                sex: sex === "1",
                                phoneNumber: phoneNumber
                            }
                        )
                    }
                )

                if (response.ok) {
                    setAnnounce("Registered successfully, please check your email to activate the account!");
                } else {
                    console.log(response.json());
                    setAnnounce("Something occured while signing up the account!");
                }
            } catch (error) {
                setAnnounce("Something occured while signing up the account!");
            }
        }
    }

    const usernameIsExists = async (_username: string) => {
        const url = `http://localhost:8080/users/search/existsByUsername?username=${_username}`

        //call api
        try {
            const reponse = await fetch(url);
            const data = await reponse.text();
            if (data === "true") {
                setErrorUsername("Username existed!");
                return true;
            }
            return false;
        } catch (error) {
            console.error("Have an error while checking username!")
            return false;
        }
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //Thay doi gia tri
        setUsername(e.target.value);

        //Kiem tra
        setErrorUsername("");

        //Kiem tra su ton tai
        return usernameIsExists(e.target.value);

    }

    const emailIsExists = async (_email: string) => {
        const url = `http://localhost:8080/users/search/existsByEmail?email=${_email}`
        try {
            const response = await fetch(url);

            const data = await response.text();

            if (data === 'true') {
                setErrorEmail("Email existed!");
                return true;
            }
            return false;
        } catch (error) {
            console.error("Have an error while checking email!")
            return false;
        }
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);

        setErrorEmail("");

        return emailIsExists(e.target.value);
    }

    const validatePassword = (_password: string) => {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!pattern.test(_password)) {
            setErrorPassword("Password must include at least 8 characters, a lowercase and uppercase letter, a digit and a speacial character!");
            return false;
        }
        setErrorPassword("");
        return true;
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setPassword(e.target.value);
        setErrorPassword("");
        return validatePassword(e.target.value);
    }

    const validateRepeatPassword = (repeatedPassword: string) => {
        if (repeatedPassword !== password) {
            setErrorRepeatPass("Password mismatch!")
            return false;
        }
        setErrorRepeatPass("");
        return true;
    }

    const handleRepeatPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setRepeatedPassword(e.target.value);
        setErrorRepeatPass("");
        return validateRepeatPassword(e.target.value);
    }

    return (
        <div className="container">
            <div className="border shadow  rounded-5 mx-auto w-50 ps-5 pe-5 pb-3 pt-3 mt-5 mb-5">
                <h1 className="text-center">Register</h1>
                <div className="mb-3  col-12 mx-auto">
                    <form action="" onSubmit={handleSubmit} className="form">
                        <div className="mb-3 text-start">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            <div className="text-end" style={{ color: 'red' }}>
                                {
                                    errorUsername
                                }
                            </div>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <div className="text-end" style={{ color: 'red' }}>
                                {
                                    errorEmail
                                }
                            </div>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <div className="text-end" style={{ color: 'red' }}>
                                {
                                    errorPassword
                                }
                            </div>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="repeatPassword" className="form-label">Repeat password</label>
                            <input
                                type="password"
                                id="repeatPassword"
                                className="form-control"
                                value={repeatedPassword}
                                onChange={handleRepeatPassChange}
                            />
                            <div className="text-end" style={{ color: 'red' }}>
                                {
                                    errorRepeatPassword
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3 text-start">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => { setLastName(e.target.value) }}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3 text-start">
                                    <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                                    <input
                                        type="number"
                                        id="phoneNumber"
                                        className="form-control"
                                        value={phoneNumber}
                                        onChange={(e) => { setPhoneNumber(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="sex" className="form-label">Sex</label>
                                    <select
                                        name="sex"
                                        id="sex"
                                        value={sex}
                                        className="form-control"
                                        onChange={(e) => { setSex(e.target.value) }}
                                    >
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary form-control" type="submit">Sign up</button>
                            <div className="text-start" style={{ color: 'green' }}>
                                {
                                    announce
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterUser;