import React from 'react';
import Select from 'react-select';
import './SelectOrganization.css';

function SelectOrganization(props) {
  const options =[
    {value: 'chocolate', label: 'chocolate'},
    {value: 'strawberry', label: 'strawberry'},
    {value: 'vanilla', label: 'vanilla'},
  ]
  return (
    <div className="select">
      <Select menuList options={options} />
    </div>
  );
}

export default SelectOrganization;
