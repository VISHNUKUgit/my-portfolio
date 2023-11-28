import React from 'react'
import { exData } from './experience'
function Exp(props) {
    const { isDarkMode, setIsDarkMode } = props
  return (
    <div className={`${isDarkMode ? 'bg-stone-900' : 'bg-stone-400'}`}>
    <h1 className={`text-center  intro-font text-4xl p-10 ${isDarkMode ? 'text-slate-400' : ' text-black'} `}>Experience in</h1>
    <div className={`flex items-center justify-center `}>
        
        <div className='w-10/12 flex flex-wrap justify-center items-center '>

            {
                exData.map((url,index)=>(
                    
                <div className='tech-icon bg-slate-300 flex justify-center items-center w-44 sm:w-64' key={index}>
                    <img className='w-6/12 ' src={url.url} alt="" />
                </div>
                ))
                
            }
        </div>
    </div>
    </div>
  )
}

export default Exp