import React from 'react'
import Location from './Location'
import Salary from './Salary';
import JobPostingData from './JobPostingData';
import WorkExperience from './WorkExperience';

const Sidebar = ({handleInputChange, handleClick}) => {
  return (
    <>
      <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>

        <Location handleInputChange={handleInputChange} />
        <Salary handleInputChange={handleInputChange} handleClick={handleClick}/>
        <JobPostingData handleInputChange={handleInputChange} />
        <WorkExperience handleInputChange={handleInputChange} />
      </div>
    </>
  )
}

export default Sidebar;
