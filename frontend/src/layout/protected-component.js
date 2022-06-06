import React, { useEffect } from 'react';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ProtectedComponent = (props) => {
    const isLogin = Cookies.get("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            navigate("/auth/signin");
        }
    }, []);

    return <>{props.children}</>;
}

export default ProtectedComponent;