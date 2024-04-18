import React from 'react'
import InputFields from '../components/InputFields'

const WorkExperience = ({handleInputChange}) => {
  return (
    <>
     <div>
      <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
      <div>
        <label className='sidebar-label-container'>
          <input  type="radio" name="test3" id="test3" value="" onChange={handleInputChange} />
          <span className="checkmark"></span>Any experience
        </label>
        <InputFields handleInputChange={handleInputChange} value="Internship" title="Internship" name="test3"/>
        <InputFields handleInputChange={handleInputChange} value="work remotely" title="Work remotely" name="test3"/>
        <InputFields handleInputChange={handleInputChange} value="2plusyears" title="2+ years" name="test3"/>
        <InputFields handleInputChange={handleInputChange} value="5plusyears" title="5+ years" name="test3"/>
       
      </div>
    </div> 
    </>
  )
}

export default WorkExperience
