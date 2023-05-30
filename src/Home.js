import React, { useState, useEffect } from 'react';
import Details from './Details';
import './index.css'
function Home() {
  const [formdata, setFormData] = useState({
    name: ''
  });
  const [status, setStatus] = useState();

  function Handlechange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const fetchData = () => {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${formdata.name}?unitGroup=us&key=MGFBDK222XUUK6GVPNYG4HUU8&contentType=json`)
      .then((response) => response.json())
      .then((data) => setStatus(data));
  };

//   useEffect(() => {
//     if (formdata.name) {
//       fetchData();
//     }
//   }, [formdata.name]);

  function Handlesubmit(e) {
    e.preventDefault();
    if (formdata.name) {
      fetchData();
    }
  }

  console.log("funck");

  return (
    <>
    <form   className='formdiv' onSubmit={Handlesubmit}>
      <input className='inputForm'  onChange={Handlechange} name="name" value={formdata.name} placeholder="Enter City Name" />

      <button  className='btn' type="submit">Search</button>

    </form> 
    <hr/>
    <div>
        <Details status={status}/>
    </div>
    
    </>
  );
}

export default Home;
