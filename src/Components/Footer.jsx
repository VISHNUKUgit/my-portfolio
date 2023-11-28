import React from 'react'

function Footer(props) {

    const { isDarkMode, setIsDarkMode } = props
    return (
        <div className={`${isDarkMode ? 'bg-stone-900' : 'bg-slate-900'} p-10 text-slate-400`} >
            <div className=' flex flex-wrap  w-100 justify-between text-sm sm:text-base '>
                <div className='text-start'>
                    <h1>VISHNU KU</h1>
                    <h1 className='mt-2 sm:mt-0'>VISHNUKU.COM</h1>
                </div>
                <div className='text-start'>
                    <h1>LINKS</h1>
                    <div className='flex mt-2'>
                        <div className='mr-3'><i class="fa-brands fa-github fa-xl"></i></div>
                        <div className='mx-3'><i class="fa-brands fa-stack-overflow fa-xl"></i></div>
                        <div className='mx-3'><i class="fa-brands fa-x-twitter fa-xl"></i></div>
                        <div className='mx-3'><i class="fa-brands fa-facebook fa-xl"></i></div>
                    </div>
                </div>
                
                <div className='text-start mt-3 sm:mt-0 '>
                    <h1>Contact me</h1>
                    <div><h1><i class="fa-solid fa-envelope" style={{ color: "#ffffff" }}></i> dvishnux@gmail.com</h1></div>
                    <div><h1><i class="fa-solid fa-phone fa-xl" style={{ color: "#ffffff" }}></i>9048310727</h1></div>
                </div>
            </div>
            <hr className='my-5'/>
<div className='text-center'>
    <h1> &#169; kerala ,India. All Rights Reserved</h1>
</div>
        </div>
    )
}

export default Footer