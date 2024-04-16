import React from 'react'
import InputFields from '../components/InputFields'

const WorkExperience = (handleInputChange) => {
  return (
    <>
     <div>
      <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
      <div>
        <label className='sidebar-label-container'>
          <input  type="radio" name="test" id="test" value="" onChange={handleInputChange} />
          <span className="checkmark"></span>Any experience
        </label>
        <InputFields handleInputChange={handleInputChange} value="Internship" title="Internship" name="test"/>
        <InputFields handleInputChange={handleInputChange} value="work remotely" title="Work remotely" name="test"/>
        <InputFields handleInputChange={handleInputChange} value="madrid" title="Madrid" name="test"/>
        <InputFields handleInputChange={handleInputChange} value="boston" title="Boston" name="test"/>
        <InputFields handleInputChange={handleInputChange} value="San Francisco" title="San Francisco" name="test"/>
      </div>
    </div> 
    </>
  )
}

export default WorkExperience
