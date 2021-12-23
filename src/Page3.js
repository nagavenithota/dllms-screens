import React from 'react'

function Page3() {
    return (
        <div style={{backgroundColor:"#EBF3FE"}}>
          <img src="./assets/assets/Images/bg24.png" class="right-52 ml-72" style={{position:"relative",bottom:300}}/>
          <div>
          <img src="./assets/assets/Images/dig.png" class="ml-80 relative left-52"style={{position:"relative",bottom:1000}} class="ml-96 relative left-36"/>    
              </div>  <div class='border-gray-300 border bg-white  ml-96'style={{width:500,height:450,position:"relative",bottom:1000}}>
              <button class="mt-10 text-xs bg-slate-300 relative bottom-10 w-52 p-3 mr-16">SIGN UP</button>
              <button class="mt-8 text-xs  ml-16 relative bottom-46 p-3 " style={{position:"relative",bottom:48}}>SIGN IN</button>
              <input type="text" placeholder='EMAIL' className='border-b-2 w-96 relative top-24 ml-6'/>
              <input type="text" placeholder='PASSWORD' className='border-b-2 w-96 relative top-36 ml-6'/>
              <div>
              <input type="text" placeholder='Forgot Password' className='border-b-2 w-26 text-xs relative top-40 ml-44'/>
              <button className='text-white border-1 bg-blue-500 rounded-xl w-40 h-6 ml-40 relative top-44'>SIGNUP</button>
              <p className='border-b-2 w-36  ml-56 relative top-44 text-xs'>OR</p>
              <div className='flex flex-row gap-4 ml-48'>
                <img src="./assets/assets/Images/2img.png" alt='in' className='h-10' style={{position:"relative",top:180}} ></img>
                <img src="./assets/assets/Images/2img2.png" alt='google' className='h-12' style={{position:"relative",top:180}} ></img>
                </div>
              </div>
              </div>
        </div>
    )
}

export default Page3
