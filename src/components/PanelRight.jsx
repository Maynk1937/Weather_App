import { useContext } from "react";
import UserContext from "../Context/UserContext";
import sunny from '../assets/sunny.jpg'
import rain from '../assets/rain.jpg'
import cloud from '../assets/clouds.jpg'
import clear from '../assets/clear.jpg'
import bolt from '../assets/city.jpg';
import mist from '../assets/Mist.jpg'
import snow from '../assets/Snow.jpg'


function PanelRight() {

    const {
        city, setCity, country, weather, visibility, temp,
        humidity, speed, desiredcity, desc
    } = useContext(UserContext);

     const handleSubmit= async(e)=>{
        e.preventDefault();
        if(desiredcity.current.value == ''){
            alert("Please Enter City Name");
            return;
        }
        else{
            setCity(desiredcity.current.value);
            desiredcity.current.value = ''; 
        }

     }

     const weatherUpdate =  (weather) =>{
        switch (weather.toLowerCase()) {
            case 'clear':
                return <i className="fa-solid fa-4x fa-sun m-2"></i>
            case 'sunny':
                return <i className="fa-solid fa-4x fa-sun m-2"></i>
            case 'clouds':
                return <i className="fa-solid fa-4x fa-cloud m-2"></i>
            case 'rain':
                return <i className="fa-solid fa-4x fa-cloud-showers-heavy"></i>
            case 'mist':
                return <i className="fa-solid fa-4x fa-smog"></i>
            case 'snow':
                return <i className="fa-solid fa-snowflake"></i>
            default:
                break;     
        }
     }

     const backgroundUpdate = (weather)=>{
        switch (weather.toLowerCase()) {
            case 'sunny':
                return sunny;

            case 'rain':
                return rain;
        
            case 'clouds':
                return cloud
            
            case 'thunder':
                return bolt

            case 'clear':
                return clear
            case 'mist':
                return mist
            case 'snow':
                return snow
        
            default:
                return bolt;
        }
    }

    // const isSmallScreen = window.innerWidth < 640;

    return (
      <div className={`py-4 px-6 text-center sm:bg-black flex flex-col text-white text-xl sm:text-2xl max-w-full overflow-hidden
                    w-full : 'sm:w-2/6'}`}
      style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0.9, 0.9, 0.9, 1)), url(${backgroundUpdate(weather)})`
    }}
      >
        <span className='text-2xl font-semibold m-3 cursor-pointer text-left sm:hidden hover:text-blue-200 ' onClick={() => window.location.reload()}>
            WeatheRepo
        </span>
        <span className="m-1">{weatherUpdate(weather)}</span>
        <h1>{weather}</h1>
        <p className="text-[12px] text-blue-500 p-1 rounded-sm hover:bg-[#171818] cursor-pointer">{desc}</p>
        <hr className="w-full h-4 my-3"/>

        <form className="flex justify-between gap-2" onSubmit={handleSubmit}>
            <input type="text"
             className="outline-0 border-0 rounded-lg w-5/6 text-white text-sm p-2 bg-slate-700" placeholder="City.." 
             ref={desiredcity}
             />
            <button type="submit"><i className="fa-solid fa-magnifying-glass cursor-pointer hover:bg-slate-800 flex text-center p-2 rounded-full"></i></button>
        </form>

        <hr className="w-full h-4 my-3"/>

        <p className="m-3">{city}, {country}</p>

        <hr className="w-full h-4 my-3"/>

        <div className="text-sm">
            <div className="flex justify-between">
                <span className='flex gap-2 text-center justify-center'>Temperature<i className="fa-solid fa-temperature-low"></i></span>
                <span>{temp}°C </span>
            </div>
            <hr className="w-full h-4 my-3"/>
            
            <div className="flex justify-between">
                <span className='flex gap-2 text-center justify-center'>Humidity<i className="fa-solid fa-droplet"></i></span>
                <span>{humidity} % </span>
            </div>
            <hr className="w-full h-4 my-3"/>
            
            <div className="flex justify-between">
                <span className='flex gap-2 text-center justify-center'>Visibility<i className="fa-solid fa-eye"></i></span>
                <span>{visibility} mi </span>
            </div>
            
            <hr className="w-full h-4 my-3"/>
            <div className="flex justify-between">
                <span className='flex gap-2 text-center justify-center'>Wind Speed<i className="fa-solid fa-wind"></i></span>
                <span>{speed} km/h </span>
            </div>
            <hr className="w-full h-4 my-3"/>
        </div>
        </div>
    );
  }

  
  export default PanelRight;
  
