import React from 'react';
import InputFields from '../components/InputFields';

const Location = ({ handleInputChange }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>
      
      <div>
        <label className='sidebar-label-container'>
          <input  type="radio" name="test" id="test" value="" onChange={handleInputChange} />
          <span className="checkmark"></span>All
        </label>
        <InputFields handleInputChange={handleInputChange} value="london" title="London" name="test"/>
        <InputFields handleInputChange={handleInputChange} value="seattle" title="Seattle" name="test"/>
        <InputFields handleInputChange={handleInputChange} value="madrid" title="Madrid" name="test"/>
        <InputFields handleInputChange={handleInputChange} value="boston" title="Boston" name="test"/>
        <InputFields handleInputChange={handleInputChange} value="San Francisco" title="San Francisco" name="test"/>
      </div>
    </div>
  );
};

export default Location;
