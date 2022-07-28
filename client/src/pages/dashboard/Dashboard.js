import { useEffect, useState } from "react";
import axios from 'axios'

import Map from "../../components/map/Map";

function Dashboard() {
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/dashboard").then((response) => {

            setStatistics(response.data);
        }).catch((e) => console.log(e));
    });

    return (
        <div>
            <h1>Hello Dashboard</h1>
            <div>
                <Map data={statistics}/>
            </div>
        </div>

    )
}

export default Dashboard;
