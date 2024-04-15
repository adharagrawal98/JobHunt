import React from 'react'
import Location from './Location'

const Sidebar = ({handleInputChange, handleClick}) => {
  return (
    <>
      <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>

        <Location handleInputChange={handleInputChange} />
      </div>
    </>
  )
}

export default Sidebar;
