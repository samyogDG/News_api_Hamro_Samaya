import React, { useState, useEffect } from 'react';


const HomeSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  };

  const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  const formattedTime = currentTime.toLocaleTimeString('en-US', options);

  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentTime.toLocaleDateString('en-US', optionsDate);

  return (
    <div className="home-section">
      <h1>Hamro <span className="badge text-bg-danger">Samaya</span></h1>
     
      <div className="datetime">
        <p className="date">{formattedDate}</p>
        {/* <p className="additional-info">Without Fear or Favour</p> */}
        <p className="time">{formattedTime}</p>
        <div className="line"></div> 
    </div>
    
    </div>
    
  );
}

export default HomeSection;
