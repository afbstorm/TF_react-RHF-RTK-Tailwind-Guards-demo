import Auth from "./components/auth/auth.jsx";
import {Navigate} from "react-router-dom";

function App() {

  const isAuth = localStorage.getItem('authToken')

  return isAuth ? <Navigate to="/dashboard" replace /> : <Auth />
}

export default App
