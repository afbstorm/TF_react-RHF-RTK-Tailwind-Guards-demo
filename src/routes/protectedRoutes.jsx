import {Navigate, Outlet, useLocation} from "react-router-dom";

const ProtectedRoutes = () => {

    const location = useLocation();
    const isAuth = localStorage.getItem('authToken')

    if (isAuth === undefined) {
        return null;
    }

    return isAuth ? <Outlet/> : <Navigate to="/" replace state={{ from: location }} />;
}

export default ProtectedRoutes;
