import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

const NewsLetter = () => {
  return (
    <>
    <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'> 
        <FaEnvelopeOpenText />Email me for Jobs</h3>
        <p className='text-primary/75 text-base mb-4'> Are you tired of endlessly searching for job opportunities? Let us do the work for you! Subscribe to our job alert service, and we'll send the latest job openings directly to your email inbox.</p>
        <div className='w-full space-y-4'>
        <input type="email" placeholder='email@domain.com' className='w-full block py-2 pl-3 border focus:outline-none border-gray-300 rounded-md'/>
        <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
        </div>
    </div>
{/* notification section */}
    <div className='mt-20'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'> 
        <FaRocket />Get Noticed Faster</h3>
        <p className='text-primary/75 text-base mb-4'> Ready to take your career to the next level? Upload your resume now and get noticed faster by top employers.</p>
        <div className='w-full space-y-4'>
        <input type="submit" value={"Upload your Resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
        <p className='text-primary/90 text-sm mb-4'> <strong>Privacy Notice:</strong> We value your privacy and will only share your resume with verified employers. Your personal information will remain confidential.</p>
        </div>
    </div>
      
    </>
  )
}

export default NewsLetter
