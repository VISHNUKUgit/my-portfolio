import React from 'react'
import '../index.css';
function Intro(props) {
    const { isDarkMode, setIsDarkMode } = props
    return (
        <div className={`flex w-100 justify-center items-center intro-font ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`} >
            <div className='flex flex-col sm:flex-row w-9/12 ' style={{ margin: "50px 50px" }}>
                <div className={`flex flex-col items-center   w-100 sm:w-4/12 justify-center ${isDarkMode ? 'text-slate-400' : 'text-black'} `}>
                    <h2 className='text-xl'>VISHNU KU</h2>
                    <div className='' style={{ width: '40px', height: '4px', borderRadius: "25px", backgroundColor: "#845EC0" }}></div>
                    <span className='text-lg'>FUll-Stack developer</span>
                    <span className='text-lg'>Living in thrissur, Kerala</span>
                </div>
                <hr className='my-8   mx-0 sm:mx-8 ' />
                <div className=' w-100 sm:w-8/12 '>
                    <span className={`text-xl text-justify ${isDarkMode ? 'text-slate-400' : 'text-black'}`}>Dedicated and Enthusiastic full stack developer with 6 month experience in Web development includes  Node JS(Express JS) and Mongo DB in the backend. Front end development includes React JS, HTML, CSS, Javascript, Bootstrap and Tailwind. I have also knowledge in Java and Python.</span>
                    <div className='flex flex-col'>
                        <div className="html my-1 h-6 bg-zinc-400 w-10/12 rounded-xl">
                            <div className='bg-red-600 w-8/12 rounded-xl h-6 flex  justify-between  items-center text-xs sm:text-base'>
                                <span className='pl-2 '>HTML</span>
                                <span className='pr-2'>70%</span>
                            </div>
                        </div>
                        <div className="css my-1 h-6 bg-zinc-400 w-10/12 rounded-xl">
                            <div className='bg-red-600 w-6/12 rounded-xl h-6 flex justify-between items-center text-xs sm:text-base'>       
                                <span className='pl-2'>CSS</span>
                                <span className='pr-2'>50%</span></div>
                        </div>
                        <div className="my-1 h-6 bg-zinc-400 w-10/12 rounded-xl">
                            <div className='bg-red-600 w-24 sm:w-60 rounded-xl h-6 flex justify-between items-center text-xs sm:text-base'>
                                 <span className='pl-2'>JavaScript</span>
                                 <span className='pr-2'>43%</span>  
                            </div>  
                        </div>
                        <div className="my-1 h-6 bg-zinc-400 w-10/12 rounded-xl">
                            <div className='bg-red-600 w-6/12 rounded-xl h-6 flex justify-between items-center text-xs sm:text-base'>
                                <span className='pl-2'>React JS</span>
                                 <span className='pr-2'>50%</span>
                            </div>
                        </div>
                        <div className="my-1 h-6 bg-zinc-400 w-10/12 rounded-xl">
                            <div className='bg-red-600  rounded-xl h-6 flex justify-between items-center text-xs sm:text-base w-24 sm:w-60'>
                                <span className='pl-2'>Bootstrap</span>
                                 <span className='pr-2'>43%</span>
                            </div>     
                        </div>
                        <div className="my-1 h-6 bg-zinc-400 w-10/12 rounded-xl">
                            <div className='bg-red-600 w-5/12 rounded-xl h-6 flex justify-between items-center text-xs sm:text-base'>
                                <span className='pl-2'>Tailwind</span>
                                 <span className='pr-2'>40%</span>
                            </div>     
                        </div>
                        <div className="my-1 h-6 bg-zinc-400 w-10/12 rounded-xl">
                            <div className='bg-red-600 w-5/12 rounded-xl h-6 flex justify-between items-center text-xs sm:text-base'>
                                <span className='pl-2'>Node JS</span>
                                 <span className='pr-2'>40%</span>
                            </div>     
                        </div>
                        <div className="my-1 h-6 bg-zinc-400 w-10/12 rounded-xl">
                            <div className='bg-red-600 w-24 sm:w-60 rounded-xl h-6 flex justify-between items-center text-xs sm:text-base'>
                                <span className='pl-2'>Mongo DB</span>
                                 <span className='pr-2'>43%</span>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro