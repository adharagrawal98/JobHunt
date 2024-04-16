import React from 'react'

const Button = ({onClickHandler, value, title}) => {
  return (
    <>
      <button className='px-4 py-1 border text-base hover:bg-blue hover:text-white' value={value} onClick={onClickHandler}>{title}</button>
    </>
  )
}

export default Button;
