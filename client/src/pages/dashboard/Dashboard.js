import { useEffect, useState, useContext } from "react";
import axios from 'axios'

import Map from "../../components/map/Map";

import AuthContext from '../../contexts/authContext';

function Dashboard() {
    const { authState } = useContext(AuthContext);

    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/dashboard").then((response) => {

            setStatistics(response.data);
        }).catch((e) => console.log(e));
    });

    return (
        <div>
            <h1>Hello Dashboard</h1>
            <h2>You are {authState.name}</h2>
            <div>
                <Map data={statistics}/>
            </div>
        </div>

    )
}

export default Dashboard;
