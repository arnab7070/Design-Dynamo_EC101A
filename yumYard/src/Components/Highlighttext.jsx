//Author:Supratik De//
import React from 'react'

function HighlightText({text}) {
  return (
    <span className='text-[#652429]  bg-clip-text font-extrabold text-[50px]'>
        {" "}
        {text}
    </span>
  )
}
  
export default HighlightText