import React from 'react';
import Filters from '../../components/Filters/Filters';
import SelectOrganization from '../../components/SelectOrganization/SelectOrganization';
import WrapBTN from '../WrapBTN/WrapBTN';
import './Content.css'

function Content(props) {
  return (
    <div className="wrap">
      <div className="container-content-left">
        <SelectOrganization />
        <Filters />
      </div>

      <div className="container-content-right">
        <WrapBTN />
      </div>
    </div>
  );
}

export default Content;
