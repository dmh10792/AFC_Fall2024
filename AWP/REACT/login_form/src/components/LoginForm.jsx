import { useState } from "react";

const LoginForm = () => {

    const[showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form className="form">
            Username:
            <input type="text" />
            Password:
            <input type={showPassword ? "text" : "password"} />
            <input type="checkbox" onChange={handleShowPassword} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;