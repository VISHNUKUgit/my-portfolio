import React from 'react'
import { projectsDetails } from './project'
import '../index.css';

function Projects(props) {
    const {isDarkMode,setIsDarkMode} =props
  return (
    <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
    <h1 className={`text-center  intro-font text-4xl p-10 ${isDarkMode ? 'text-slate-400' : ' text-black'} `}>My Projects</h1>
    <div className={`flex items-center justify-center `}>
        
        <div className='w-10/12 flex flex-wrap justify-center items-center '>

            {
                projectsDetails.map((details,index)=>(
                    
                <div className='w-11/12 sm:w-5/12 m-5 proBox bg-slate-300 ' >
                    <div className=' h-3/4 m-6 w-11/12 flex justify-center items-center '>
                        <div className='w-5/12 h-3/4  '>
                            <img className='w-10/12 project-img' src={details.img} alt="" />
                        </div>
                        <div className='w-7/12 text-start '>
                                <h1 className='text-xl sm:text-3xl bold'>{details.name}</h1>
                                <h1 className='bold'>{details.description},</h1>
                                <h1>{details.techUes }</h1>
                                <button className='button-32'><a href={details.url} target="_blank">URL</a></button>
                        </div>
                    </div>

                </div>
                ))
                
            }
        </div>
    </div>
    </div>
  )
}

export default Projects