import React, { useState } from 'react';
import CityList from './CityList';

const StateList = ({ country }) => {
  const [states, setStates] = useState(country.states);

  const addState = (stateName) => {
    const newState = { id: Date.now(), name: stateName, cities: [] };
    setStates([...states, newState]);
  };

  const editState = (stateId, newName) => {
    const updatedStates = states.map(state =>
      state.id === stateId ? { ...state, name: newName } : state
    );
    setStates(updatedStates);
  };

  const deleteState = (stateId) => {
    const confirmed = window.confirm("Are you sure you want to delete this state?");
    if (confirmed) {
      const updatedStates = states.filter(state => state.id !== stateId);
      setStates(updatedStates);
    }
  };

  return (
    <div>
      <h3>States in {country.name}</h3>
      <button className='add-btn' onClick={() => {
        const stateName = prompt("Enter state name:");
        if (stateName) addState(stateName);
      }}>Add State</button>
      <ul>
        {states.map(state => (
          <li key={state.id}>
            {state.name}
            <button onClick={() => {
              const newName = prompt("Enter new state name:", state.name);
              if (newName && newName !== state.name) editState(state.id, newName);
            }}>Edit</button>
            <button onClick={() => deleteState(state.id)}>Delete</button>
            <CityList state={state} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateList;
