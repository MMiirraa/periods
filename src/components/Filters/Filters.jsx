import React from 'react';
import Select from 'react-select';
import './Filters.modul.css';

function Filters(props) {
  return (
    <div className="container-filters">
      <div className="filter">
        <Select closeMenuOnSelect={false} isMulti className="react-select-container" />
        <div className="filter-item"></div>
      </div>
      <div className="filter">
        <Select closeMenuOnSelect={false} isMulti className="react-select-container" />
        <div className="filter-item"></div>
      </div>
      <div className="filter">
        <Select closeMenuOnSelect={false} isMulti className="react-select-container" />
        <div className="filter-item"></div>
      </div>
      <div className="filter">
        <Select closeMenuOnSelect={false} isMulti className="react-select-container" />
        <div className="filter-item"></div>
      </div>
    </div>
  );
}

export default Filters;
