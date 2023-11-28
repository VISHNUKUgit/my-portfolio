import React from 'react';
import '../index.css';
import Typewriter from "typewriter-effect";

function Navbar(props) {
  const {isDarkMode,setIsDarkMode} =props
  


  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
 
  
  return (
    <div className={`App ${isDarkMode ? 'bg-stone-900' : 'bg-stone-400'} p-5`}>
      <div className='fixed'>
        <input type="checkbox" id="modeToggle" onChange={toggleDarkMode} />
        <label htmlFor="modeToggle" className={`p-1 ${isDarkMode ? 'text-slate-400' : ' text-black'}  `}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</label>
      </div>
      
      <div className='p-5 flex flex-col items-start sm:justify-center sm:items-center  sm:flex-row '>
        <div className='sm:w-3/12 '>
          <img className='' src="https://img.freepik.com/premium-vector/jonge-lachende-man-avatar-man-met-bruine-baard-snor-en-haar-dragen-gele-trui-of-sweatshirt-3d-vector-mensen-karakter-illustratie-cartoon-minimalistische-stijl_365941-860.jpg?w=2000" alt=""  style={{width:"270px" ,height: "270px",borderRadius:"50%"}}/>
        </div>
        <div className='bg-slate-900 p-2 sm:p5 mt-4 sm:mt-0 sm:ml-5 text-slate-300 rounded-xl sm:text-4xl  sm:w-7/12 leading-7 ' >
        <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(500)
                        .typeString(`<span style="color: #344ceb;">var </span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #34abeb;">name </span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #ebf1f5;">= </span>`)
                        .pauseFor(500)
                        .typeString(`<span style="color: #f75b3b;">'VISHNU KU' </span>`)
                        .pauseFor(0)
                        .deleteAll()
                        .typeString(`<span style="color: #344ceb;">const </span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #34abeb;">name </span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #ebf1f5;">= </span>`)
                        .pauseFor(500)
                        .typeString(`<span style="color: #f75b3b;">'VISHNU KU' </span>`)
                        .pauseFor(0)
                        .typeString(`<span style="color: #ebf1f5;">;</span>`)
                        .pauseFor(1000)
                        .typeString('<br>')
                        .pauseFor(1000)
                        .typeString(`<span style="color: #344ceb;">var </span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #34abeb;">stacks </span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #ebf1f5;">= </span>`)
                        .pauseFor(500)
                        .typeString(`<span style="color: #b342f5;">[ </span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #f75b3b;"> 'HTML' </span>`)
                        .pauseFor(0)
                        .typeString(`<span style="color: #ebf1f5;">,</span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #f75b3b;"> 'CSS' </span>`)
                        .pauseFor(0)
                        .typeString(`<span style="color: #ebf1f5;">,</span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #f75b3b;"> 'JavaScript' </span>`)
                        .pauseFor(0)
                        .typeString(`<span style="color: #ebf1f5;">,</span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #f75b3b;"> 'React JS' </span>`)
                        .pauseFor(0)
                        .typeString(`<span style="color: #ebf1f5;">,</span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #f75b3b;"> 'BootStrap' </span>`)
                        .pauseFor(0)
                        .typeString(`<span style="color: #ebf1f5;">,</span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #f75b3b;"> 'Node JS' </span>`)
                        .pauseFor(0)
                        .typeString(`<span style="color: #ebf1f5;">,</span>`)
                        .pauseFor(1000)
                        .typeString(`<span style="color: #f75b3b;"> 'Mongo DB' </span>`)
                        .pauseFor(0)
                        .typeString(`<span style="color: #b342f5;"> ] </span>`)
                        .pauseFor(1000)

                        .start();
                        
                }}
            />
            
        </div>
      </div>
    </div>
  );
}

export default Navbar;
