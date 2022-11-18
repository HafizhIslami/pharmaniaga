import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
    let auth = localStorage.access_token;

    if (!auth) {
        return <Navigate to="/login" replace />;
    }

    return props.children;
}

export default ProtectedRoute;