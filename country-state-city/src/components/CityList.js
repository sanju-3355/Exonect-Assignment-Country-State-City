import React, { useState } from 'react';

const CityList = ({ state }) => {
  const [cities, setCities] = useState(state.cities);

  const addCity = (cityName) => {
    const newCity = { id: Date.now(), name: cityName };
    setCities([...cities, newCity]);
  };

  const deleteCity = (cityId) => {
    const confirmed = window.confirm("Are you sure you want to delete this city?");
    if (confirmed) {
      const updatedCities = cities.filter(city => city.id !== cityId);
      setCities(updatedCities);
    }
  };

  return (
    <div className='container'>
      <h4>Cities in {state.name}</h4>
      <button className='add-btn' onClick={() => {
        const cityName = prompt("Enter city name:");
        if (cityName) addCity(cityName);
      }}>Add City</button>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            {city.name}
            <button onClick={() => deleteCity(city.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
