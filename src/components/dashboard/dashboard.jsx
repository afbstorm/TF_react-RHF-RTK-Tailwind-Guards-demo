import {useSelector} from "react-redux";
import './dashboard.scss';

const Dashboard = () => {
    const userInfos = useSelector(state => state.auth)

    return (
        <h1>Hello {userInfos.login}</h1>
    )
}

export default Dashboard;
