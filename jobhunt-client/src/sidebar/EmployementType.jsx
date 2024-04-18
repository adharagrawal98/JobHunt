import React from 'react'
import InputFields from '../components/InputFields'

const EmployementType = ({handleInputChange}) => {
  return (
    <>
       <div>
      <h4 className='text-lg font-medium mb-2'>Employement Type</h4>
      <div>
        <label className='sidebar-label-container'>
          <input  type="radio" name="test3" id="test3" value="" onChange={handleInputChange} />
          <span className="checkmark"></span>Any Type
        </label>
        <InputFields handleInputChange={handleInputChange} value="Full-time" title="Full-time" name="test3"/>
        <InputFields handleInputChange={handleInputChange} value="Part-time" title="Part-time" name="test3"/>
        <InputFields handleInputChange={handleInputChange} value="Temporary" title="Temporary" name="test3"/>
      </div>
    </div>
    </>
  )
}

export default EmployementType
