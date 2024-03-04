import React from 'react'


const Button = ({ children, active, linkto }) => {
  return (
    <a href={linkto}>
      <div className={`text-center text-[20px] px-6 py-3 rounded-md font-semibold ${active ? "bg-orange-400 text-white text-lg" : "bg-[#0186DF] border-[#652429] text-white font-bold text-xl border-2 hover:text-black hover:bg-[#20A5FE]"} hover:scale-95 hover:bg-orange-500 transition-all duration-200`}>
        {children}
      </div>
    </a>
  )
}

export default Button