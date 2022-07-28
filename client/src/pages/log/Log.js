import { useState, useEffect } from 'react';

import axios from 'axios';



function Log() {

    const [temperature, setTemperature] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [age, setAge] = useState(0);
    const [isVaccinated, setIsVaccinated] = useState(false);
    const [gender, setGender] = useState(false);

    const changeInputTemperature = (event) => {
        setTemperature(event.target.value)
    }

    const changeInputAge = (event) => {
        setAge(event.target.value)
    }

    const changeIsVaccinated = (event) => {
        setIsVaccinated(event.target.checked)
    }

    const changeInputGender = (event) => {
        setGender(event.target.value)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          });
    }, [])

    const createLog = () => {
        const obj = {
            temperature,
            latitude,
            longitude,
            age,
            gender,
            isVaccinated
        };
        console.log(obj);
        axios.post("http://localhost:8000/api/log", {
            temperature,
            latitude,
            longitude,
            age,
            gender,
            isVaccinated            
        }, {            
            headers: {
            'Content-Type': 'application/json',
            'accessToken': "accesstoken"
        }}).then((response) => {
            console.log("log", response.data);
        })
    }

    return (
        <div>
            <div>
                <span>Temperature</span>
                <input name='temperature' type="number" onChange={changeInputTemperature}/>
            </div>

            <div>
                <span>Age</span>
                <input name='name' type="number" onChange={changeInputAge}/>
            </div>

            <div>
                <span>Are You Vaccinated?</span>
                <input name="isVaccinated" type="checkbox" onChange={changeIsVaccinated} />
            </div>

            <div>
                <span>Gender</span>
                <input name="gender" type="radio" value="true" onChange={changeInputGender} />
                <label>Male</label>
                <input name="gender" type="radio" value="false" onChange={changeInputGender} />
                <label>Female</label>
            </div>

            <button onClick={createLog} >
                Create new log
            </button>
        </div>
    )
}

export default Log;
