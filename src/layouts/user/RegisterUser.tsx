import React, { useState } from "react";

function RegisterUser() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [sex, setSex] = useState(1);

    const [errorUsername, setErrorUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorRepeatPassword, setErrorRepeatPass] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {

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
        if (repeatedPassword!==password){
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
            <h1 className="mt-5 text-center">Register</h1>
            <div className="mb-3 col-md-6 col-12 mx-auto">
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
                </form>
            </div>
        </div>
    );
}

export default RegisterUser;