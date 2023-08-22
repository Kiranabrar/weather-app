import React from 'react'
import { useRef } from 'react';


export default function Search(props) {

  const searchInput = useRef();
  return (
    <div>
     

      <div className='input-group container-sm mb-4 mt-4 form-outline w-75 '>
        <input type="search" className="form-control" placeholder="Enter City Name" aria-describedby="button-addon2"
          value={props.searchdataa} onChange={() => props.eventHandler(searchInput.current.value)} ref={searchInput}
        />
        
        <button className="btn btn-primary" type="button" id="button-addon2"
          onClick={props.searchButton}
        >Search</button>
      
      </div>

      


    </div>
  )
}