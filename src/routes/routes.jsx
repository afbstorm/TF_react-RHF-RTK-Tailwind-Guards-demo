import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Dashboard from "../components/dashboard/dashboard.jsx";


const routes = createBrowserRouter([
    {path: '/', element: <App />},
    {path: 'dashboard', element: <Dashboard />}
])

export default routes;
