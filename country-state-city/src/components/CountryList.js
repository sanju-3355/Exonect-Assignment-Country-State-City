import React from 'react';
import StateList from './StateList';

const CountryList = ({ countries, onEdit, onDelete }) => {
  return (
    <div className='countrys'>
      <h2>Countries</h2>
      {countries.length === 0 ? <p>No countries added yet!</p> : null}
      <ul className='list'>
        {countries.map(country => (
          <li key={country.id}>
            {country.name}
            <button onClick={() => {
              const newName = prompt("Enter new country name:", country.name);
              if (newName && newName !== country.name) onEdit(country.id, newName);
            }}>Edit</button>
            <button onClick={() => onDelete(country.id)}>Delete</button>
            <div>
            <StateList country={country} />  
            </div>        
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
