import React, { useState } from 'react';
import './App.css';
import Itinerary from './itinerary';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mapClicked, setMapClicked] = useState(false);

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handleInput3Change = (event) => {
    setInput3(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleMapClick = () => {
    setMapClicked(true);
  };

  return (
    <div className="container">
      {!mapClicked && <img src="worldmap.png" alt="World Map" className="map" onClick={handleMapClick} />}
      <div className="title">Adventure Off</div>
      <h1>Please Enter The Following</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Location: 
          <input type="text" value={input1} onChange={handleInput1Change} />
        </label>
        <br />
        <label>
          Activity: 
          <input type="text" value={input2} onChange={handleInput2Change} />
          {/* <select value={input2} onChange={handleInput2Change} className="dropdown">
            <option value="">--Select an Option--</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Outdoors">Outdoors</option>
            <option value="Drinks">Drinks</option>
            <option value="Sports">Sports</option>
          </select> */}
        </label>
        <br />
        <label>
          Distance: 
          <input type="text" value={input3} onChange={handleInput3Change} />
        </label>
        <br />
        {mapClicked && <button type="submit">Submit</button>}
        {!mapClicked && <div className="start" onClick={handleMapClick}>Start</div>}
      </form>
      {submitted && <Itinerary input1={input1} input2={input2} input3={input3} />}
    </div>
  );
}

export default App;
