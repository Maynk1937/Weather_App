// import React from "react";
import { useEffect, useState, useRef } from "react";
import UserContext from "./Context/UserContext";
import PropTypes from "prop-types"; // Import PropTypes


const UserContextProvider = ({children}) => {

    const apikey = "3afc54251eda6f13ab5fe534e03f418e";
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const desiredcity = useRef('')

    const [city, setCity] = useState("Kurukshetra")
    const [country, setCountry] = useState("IN")
    const [weather, setWeather] = useState('Clear')
    const [temp, setTemp] = useState("23")
    const [humidity, setHumidity] = useState(38)
    const [visibility, setVisibility] = useState(3000)
    const [speed, setSpeed] = useState(3)
    const [desc, setDesc] = useState('')
    const [hours, setHours] = useState(18);
    const [min, setMin] = useState(32);
    const [day, setDay] = useState("Thursday")
    const [date, setDate] = useState(15)
    const [month, setMonth] = useState("feb")
    const [year, setYear] = useState(2024)



    useEffect(()=>{
        const forecast = async()=>{
            try {
                const response = await fetch(`${url}${city}&appid=${apikey}`);
                const data = await response.json();
                // console.log(data);
                if(data.cod === 200 && data.sys && data.main && data.weather && data.wind){
                    setWeather(data.weather[0].main);
                    setTemp(Math.round(data.main.temp));
                    setHumidity(data.main.humidity);
                    setVisibility(data.visibility/1000)
                    setSpeed(data.wind.speed);
                    setCountry(data.sys.country);
                    setDesc(data.weather[0].description.toUpperCase())
                    // setCity(data.main.name);

                    const cityTimezoneOffset = data.timezone;

                    const updateTime = ()=>{
                        const utcDate = new Date();
                        const localDate = new Date(utcDate.getTime() + cityTimezoneOffset * 1000);

                        setHours(localDate.getUTCHours());
                        setMin(localDate.getUTCMinutes());
                        setDate(localDate.getUTCDate());
                        
                        

                        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        setDay(daysOfWeek[localDate.getUTCDay()]);

                        const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        setMonth(monthsOfYear[localDate.getUTCMonth()]);
                        setYear(localDate.getUTCFullYear());
                    };

                    updateTime();

                    const intervalId = setInterval( updateTime, 1000)
                    
                    return ()=> clearInterval(intervalId);
                }
                else{
                    alert("Please Enter a valid City Name");
                    setWeather("Unknown");
                    setTemp("Nan");
                    setCountry("")
                    return;
                }
            }
            catch(error){
                console.log("Error is: ", error);
                
            }
        };
        forecast();
     }, [city]);

    return (
        <UserContext.Provider value = {{
            city, setCity, country, setCountry, visibility, setVisibility, humidity, setHumidity,
            speed, setSpeed, temp, setTemp, weather, setWeather, desiredcity, desc, setDesc, date, setDate, 
            month, setMonth, year, setYear, day, setDay, hours, setHours, min, setMin
        }}>
            {children}
        </UserContext.Provider>
    )
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserContextProvider;