import React from 'react'

export default function Result({weatherD,historyData , historySearch}) {
  const historyItems = historyData.map(
    (item, index) => {
        return <li onClick={() => historySearch(item)} className='text-xl cursor-pointer' key={index}>{item}</li>
    }
)
  
  return (

    <div className='container-sm  justify-content-center d-flex shadow mb-5  bg-body-tertiary rounded w-75  '>
   
    <div class="p-4  border-end border-3">
    <h5 className='text-center block text-3'>History</h5>
                <ul>
                    {historyItems}
                </ul>
    </div>
    <div class="p-4 w-75 ">
    {
            weatherD.length !== 0
            ?
        <>
      
            <h3 className='text-center'>{weatherD.name}</h3>
            <div>
            <img src={`http://openweathermap.org/img/wn/${weatherD?.weather?.[0].icon}@2x.png`} 
           alt={weatherD.weather?.[0]?.description} /> 
           
           <span>{weatherD.weather?.[0].description}</span>
          </div> 

            <div className='row'>
              <div className='col'>temp  :{weatherD?.main?.temp} °C</div>
              <div className='col'>feels like : {weatherD?.main?.feels_like} °C</div>
            </div>

            <div className=' row mt-3'>
             <div className='col'>Weather type:{weatherD.weather?.[0].description} </div>
              <div className='col'>Humidity: {weatherD?.main?.humidity}%</div>  
            </div>

            <div className='row mt-3'>
              <div className='col'>Visibility: {weatherD.visibility}</div>
              <div className='col'>wind: {weatherD?.wind?.speed}km/h</div>
            </div>
         </>
         :
         <>
          <div> Please Enter City Name</div>
         </>
         
        
    }
  </div>
</div>
 

  )
}
