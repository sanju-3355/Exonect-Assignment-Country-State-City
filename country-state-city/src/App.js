import React, { useState } from 'react';
import CountryList from './components/CountryList';
import './App.css'

const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = (countryName) => {
    const newCountry = { id: Date.now(), name: countryName, states: [] };
    setCountries([...countries, newCountry]);
  };

  const editCountry = (id, newName) => {
    const updatedCountries = countries.map(country =>
      country.id === id ? { ...country, name: newName } : country
    );
    setCountries(updatedCountries);
  };

  const deleteCountry = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this country?");
    if (confirmed) {
      const updatedCountries = countries.filter(country => country.id !== id);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className='app'>
      <h1>Country Management</h1>
      <button className='add-btn' onClick={() => {
        const countryName = prompt("Enter country name:");
        if (countryName) addCountry(countryName);
      }}>Add Country</button>
      
      <CountryList
        countries={countries}
        onEdit={editCountry}
        onDelete={deleteCountry}
      />
    </div>
  );
};

export default App;
