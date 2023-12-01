import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Dashboard from "../components/dashboard/dashboard.jsx";
import ProtectedRoutes from "./protectedRoutes.jsx";


const routes = createBrowserRouter([
    {path: '/', element: <App />},
    {element: <ProtectedRoutes />, children: [
            {path: 'dashboard', element: <Dashboard />}
        ]
    }
])

export default routes;
