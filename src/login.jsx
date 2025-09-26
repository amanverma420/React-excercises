import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        const correctUsername = "admin";
        const correctPassword = "admin123";
        if (username === correctUsername && password === correctPassword) {
            setIsLoggedIn(true);
        } else {
            alert("Incorrect username or password");
        }
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <h1>Login Page</h1>
            {isLoggedIn ? (
                <div>
                    <h2>Welcome, {username}!</h2>
                    <div>Login Successful</div>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                    />
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                    />
                    <br />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </>
    );
}

export default Login;
