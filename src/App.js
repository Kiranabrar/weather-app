import React from "react";
import { useState } from "react";
import Result from "./components/Result";
import Search from "./components/Search";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  
  
const [search, setSearch] = useState("");
const [weather, setWeather] = useState([]);
const [history, setHistory] = useState([]);


const changeSearch = (value) => {
     setSearch(value);
}
const handleForcast = () => {
  fetchweatherForecast(search);
};

const searchData=()=>{
  if(search!==""){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=dcdc4670986286d660736c7f0c57b601&units=metric`)
    .then(
      (response) => {
        if (history.indexOf(search) === -1) {
          setHistory(
            [
              ...history,
              search
            ]
          )
        }
        // console.log(response.data);
        setWeather(response.data);
      }
     ).catch(
      (error)=>{
        console.log(error);
      }
    )
  }
}

const historySearchHandler = async (data) => {
  setSearch(data)
  if (data !== "") {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=dcdc4670986286d660736c7f0c57b601&units=metric`)

      .then(
        (response) => {
          if (history.indexOf(data) === -1) {
            setHistory(
              [
                ...history,
                data
              ]
            )
          }
          // console.log(response.data);
          setWeather(response.data);
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      )
  }}

  
    
  return (
   
   <div>
   <div>
                <nav className="navbar sticky-top fixed-top " style={{ backgroundColor: 'rgba(233, 77,33, 0.87)' }}>
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Weather App</a>
                    </div>
                </nav>
            </div>
   <div className=" pt-5 mb-5 ">
    <Search searchdataa={search} eventHandler={changeSearch} searchButton={searchData} forCast={handleForcast}/>
    <Result  weatherD={weather} historyData={history} historySearch={historySearchHandler} />
    </div>
   <Footer/>
</div>
  
  );
}

export default App;




    
   /* 
    function App() {
      return (
        <div>
          <Weather city="Burewala" />
        </div>
      );
    }
    
    export default App;*/
    

