import WeatherList from '../WeatherList/WeatherList.jsx';
import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [city, setCity] = useState("Madrid");

  const handleState = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="weather-wrapper">
      <div className="weather-container">
        <h2 className="weather-title">Clima Actual</h2>
        <form className="weather-form" onSubmit={handleSubmit}>
          <label className="weather-label">
            <span>Ciudad</span>
            <input
              className="weather-input"
              type="text"
              name="city"
              placeholder="Ej. Madrid, Barcelona..."
              onChange={handleState}
            />
          </label>
          <button className="weather-button" type="submit">
            Buscar
          </button>
        </form>
        <div className="weather-list-wrapper">
          <WeatherList />
        </div>
      </div>
    </div>
  );
};

export default Form;
