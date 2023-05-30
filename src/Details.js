import React from 'react';

function Details(props) {
  const { status } = props;

  if (status) {
    console.log(status);
    console.log(status.description);
  }

  return (
    <>
      <div>
        <div className='details'>
          {status ? (
              <div>
                { 
                <ul className='un'>
                  <li> <b>CloudCover :</b> {status.currentConditions.cloudcover}</li>
                  <li> <b>Conditions:</b> {status.currentConditions.conditions}</li>
                  <li> <b>Time:</b>{status.currentConditions.datetime}</li>
                  <li> <b>Temp:</b>{status.currentConditions.temp}</li>
                  <li> <b>Sunrise:</b>{status.currentConditions.sunrise}</li>
                  <li> <b>Sunset:</b>{status.currentConditions.sunset}</li>
                  <li> <b>Humidity:</b>{status.currentConditions.humidity}</li>
                  <li><b>Visibility:</b> {status.currentConditions.visibility}</li>
                </ul>
                 
                 }
                </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Details;
