import { useEffect, useState, useContext } from "react";
import axios from 'axios'

import Map from "../../components/map/Map";
import { Form, Button, FloatingLabel, Container, Row, Col } from 'react-bootstrap';

import AuthContext from '../../contexts/authContext';

function Dashboard() {
    const { authState } = useContext(AuthContext);

    const [statistics, setStatistics] = useState([]);
    const [dashboardInfo, setDashboardInfo] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/dashboard").then((response) => {
            // console.log(response.data)
            setStatistics(response.data);
            setDashboardInfo({
                diffrentCountries: response.data.length,
                totalPatients: response.data.reduce((sum, logsInCountry) => sum + logsInCountry.length, 0),
                maxDiffrent: Math.max(...response.data.map(o => o.length)),
                maxCountry: response.data.reduce((prev, current) => (prev.length > current.length) ? prev: current)
            })
            // console.log(dashboardInfo.maxCountry)
        }).catch((e) => console.error(e));
    });

    return (
        <div className="text-center bg-dark text-white">
            <h1>Hello Dashboard</h1>
            <h2>Live stats</h2>

            <div>
                <Map data={statistics}/>
            </div>

            <Container>
                <div>
                    <Row>
                        <Col xs={12} sm={6}>
                            <div>
                                Total Patient: 
                                <br/>
                                {dashboardInfo.totalPatients}
                            </div>
                        </Col>

                        <Col xs={12} sm={6}>
                            <div>
                                Number of different countries
                                <br/>
                                {dashboardInfo.diffrentCountries}
                            </div>
                        </Col>  
                        {dashboardInfo.maxCountry && 
                        <>
                            <Col xs={12} sm={6}>
                                <div>
                                    The top country is: 
                                    <br/> 
                                    <h2>
                                        <img alt="country flag" src={"https://disease.sh/assets/img/flags/" + dashboardInfo.maxCountry.countryCode.toLowerCase() + ".png"} height="20px" width="25px"/>
                                        {dashboardInfo.maxCountry.countryName}
                                    </h2>

                                </div>
                            </Col>

                            <Col xs={12} sm={6}>
                                <div>
                                    number of patients in {dashboardInfo.maxCountry.countryName} is: 
                                    <br/> 
                                    {dashboardInfo.maxCountry.length}
                                </div>
                            </Col>
                        </>
                        }
                        

                        
                    </Row>


                </div>
            </Container>
 
        </div>

    )
}

export default Dashboard;
