import React from 'react'

const Button = () => {
    const handleClick = () => {console.log("click")}
    return (
    <button className='bg-white text-purple-800 hover:bg-gray-300 p-3 rounded-md' onClick={handleClick}>Butão</button>
  )
}

export default Button