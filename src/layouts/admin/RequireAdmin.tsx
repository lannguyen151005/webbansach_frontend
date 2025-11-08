import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
    isAdmin: boolean;
    isStaff: boolean;
    isUser: boolean;
}

const RequireAdmin = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WithAdminCheck: React.FC<P> = (props) => {
        const navigate = useNavigate();

        useEffect(
            () => {
                const token = localStorage.getItem("token");

                //Trong tinh huong chua dang nhap
                if (!token) {
                    navigate("/login");
                    return;
                } else {
                    //Decode token
                    const decodedToken = jwtDecode(token) as JwtPayload;
                    console.log(decodedToken);

                    //Lay thong tin cua cu the
                    const isAdmin = decodedToken.isAdmin;

                    //Kiem tra
                    if (!isAdmin) {
                        navigate("/403");
                        return;
                    } 
                }
            }, [navigate]
        )


        return <WrappedComponent {...props} />
    }
    return WithAdminCheck;
}

export default RequireAdmin;