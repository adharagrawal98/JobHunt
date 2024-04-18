import React from 'react'
import InputFields from '../components/InputFields';

const JobPostingData = ({handleInputChange}) => {
    const now = new Date();
    const  twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
   // console.log(twentyFourHoursAgo);

    // convert date to string

    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
    console.log(twentyFourHoursAgoDate);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
    console.log(sevenDaysAgoDate);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);
    console.log(thirtyDaysAgoDate);


  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
      <div>
        <label className='sidebar-label-container'>
        <input  type="radio" name="test" id="test" value="" onChange={handleInputChange} />
        <span className="checkmark"></span>All Time
        </label>
          
        <InputFields handleInputChange={handleInputChange} value={twentyFourHoursAgoDate} title="Last 24 Hours" name="test"/>
        <InputFields handleInputChange={handleInputChange} value={sevenDaysAgoDate} title="Last 7 Days" name="test"/>
        <InputFields handleInputChange={handleInputChange} value={thirtyDaysAgoDate} title="Last 30 Days" name="test"/>
      </div>
    </div>
  )
}

export default JobPostingData
