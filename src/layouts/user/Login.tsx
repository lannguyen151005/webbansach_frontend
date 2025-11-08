import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        const loginRequest = {
            username: username,
            password: password
        };

        const url = "http://localhost:8080/account/log-in";
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(loginRequest)
            }
        ).then(
            (response) => {
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error('Failed to log in');
                }
            }
        ).then(
            (data)=>{
                //Xử lý đăng nhập thành công
                const {jwt} = data;
                console.log(jwt);
                //Lưu token vao localStorage haowcj cookie
                localStorage.setItem('token', jwt);
                //Điêu hướng đên trang chính .....
            }
        ).catch(
            (error)=>{
                console.error('Failed to log in');
                setError('Fail to log in! Please, check username and password again.');
            }
        )
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-body-tertiary">
                <div className="border shadow rounded-5 mx-auto p-4 mb-5" style={{ maxWidth: '420px', width: '90%' }}>
                    <main className="form-signin w-100 m-auto">
                        <div>
                            <img className="mb-4" src="" alt="" width="72" height="57" />
                            <h1 className="h3 mb-3 fw-semibold">Please sign in</h1>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control rounded-bottom-0 rounded-top-4"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Username"
                                />
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control rounded-top-0 rounded-bottom-4"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="form-check text-start my-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="remember-me"
                                    id="checkDefault"
                                />
                                <label className="form-check-label" htmlFor="checkDefault">
                                    Remember me
                                </label>
                            </div>
                            <button
                                className="btn btn-primary w-100 py-2"
                                type="button"
                                onClick={handleLogin}
                            >
                                Sign in
                            </button>
                            {
                                error &&
                                <div style={{ color: 'red' }}>{error}</div>
                            }
                            <p className="mt-5 mb-3 text-body-secondary">© 2017–2025</p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
export default Login;