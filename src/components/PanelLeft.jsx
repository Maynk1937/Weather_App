import { useContext } from 'react';
import bolt from '../assets/city.jpg';
import UserContext from '../Context/UserContext';
import sunny from '../assets/sunny.jpg'
import rain from '../assets/rain.jpg'
import cloud from '../assets/clouds.jpg'
import clear from '../assets/clear.jpg'
import mist from '../assets/Mist.jpg'
import snow from '../assets/Snow.jpg'

function PanelLeft() {

    const {
        weather, city, country, temp, date, day, month, year
    } = useContext(UserContext)

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
    const handleRefresh = ()=>{
        window.location.reload();
    }

  return (
    <div className='sm:w-full hidden sm:block min-h-[100vh] text-white relative  bg-cover bg-center py-2 px-2 ' 
    style={{ backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0.9, 0.9, 0.9, 1)),url(${backgroundUpdate(weather)})` }}>
      {/* <img src={logo} alt="WeatherRepo" className=' w-52 h-20 cursor-pointer'/> */}
      <span className='text-2xl font-semibold m-3 cursor-pointer hover:text-blue-200' onClick={handleRefresh}>WeatheRepo</span>
      <span className='absolute right-3  sm:top-10 text-4xl font-semibold text-right'> <span className='hover:text-blue-200'>{city}</span> <br /> <span className='text-2xl hover:text-blue-200'>{country}</span></span>
      <div className='w-full absolute bottom-4 p-5 flex justify-between gap-8 text-2xl'>
        <div className='flex flex-col'>
            
            <span>{day}, {date} {month}, {year}</span>
        </div>
        <span className='text-4xl hover:text-blue-200'>{temp} °C</span>
      </div>
    </div>
  );
}



export default PanelLeft;
