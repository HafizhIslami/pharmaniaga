import { Navigate } from "react-router-dom";

function ProtectedRouteLogin(props) {
    let auth = localStorage.access_token;

    if (auth) {
        return <Navigate to="/" replace />;
    }

    return props.children;
}

export default ProtectedRouteLogin;