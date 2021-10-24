import React,{useState,useEffect} from 'react'
import './App.css'


const App = () => {
  const [getvalue, setgetvalue] = useState([{}]);
  const [weather, setweather] = useState("")

  const getweather = (e)=>{
    if(e.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&units=metric&appid=bc046d112221d24086f94a661281c698`).then(
        res => res.json()
      ).then(
        data =>{
          setgetvalue(data);
          setweather("");
        }
      )
    }
  }

  
   const today = new Date().toLocaleDateString();
 
  

  return(  <>

     <div className="body">
      <div className="weathercard">
      <div className="search">
          <input type="text" onKeyPress ={getweather} value={weather} placeholder= "search city hear" onChange = {(e)=> setweather(e.target.value)} />
      </div>
      {typeof getvalue.main === 'undefined' ?(
        <p> enter city name 🧑‍🎄 </p>
      ):(
        <>
        <div className="place">
    <div className= "iconone">
    </div>
     <h1>{ getvalue.name}</h1>
 </div>
 <div className="icon">
         <img src= {`http://openweathermap.org/img/wn/${getvalue.weather[0].icon}.png`} className= "iconimg" alt={getvalue.weather[0].description} />
         <h1>{getvalue.weather[0].main} </h1>
 </div>
 <div className="weatherinfo">
 <div className="dateinfo"> { today } </div>
     <div className="temp"> {getvalue.main.temp}  <sup>0</sup> C </div>
      <div className="otherinfo">
     <div className="windinfo"> 🎐 { getvalue.wind.speed} wind km/h </div>
     <div className="huminfo"> 💧 {getvalue.main.humidity}  Hum % </div></div>

     </div>
        
        </>
      )}
    

      </div>
     </div>
          
      </>)
      
    
}

export default App;