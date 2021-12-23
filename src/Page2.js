import React from 'react'

function Page2() {
    return (
        <div  style={{backgroundColor:"#EBF3FE"}}>
            
            <img src="./assets/assets/Images/bg24.png" class="right-52 ml-72" style={{position:"relative",bottom:400}}/>
            <div>
            <img src="./assets/assets/Images/dig.png" class="ml-80 relative left-52"style={{position:"relative",bottom:1000}} class="ml-96 relative left-36"/>    
            </div>
            <div class='border-gray-300 border bg-white ml-96'style={{width:500,height:450,position:"relative",bottom:1000}}>
                <button class="mt-8 text-xs  ml-16">SIGN UP</button>
                <button class="mb-36 text-xs bg-slate-300 ml-72 relative bottom-12 p-3 w-52" style={{position:"relative",bottom:48}}>SIGN IN</button>
                <div className='flex gap-2 relative bottom-40 ml-4'>
                    <input type="text" placeholder='FIRST NAME' className='border-b-2 w-48'/>
                    <input type="text" placeholder='LAST NAME' className='border-b-2 w-48'/>
                </div>
                <input type="text" placeholder='EMAIL' className='border-b-2 w-96 relative bottom-32 ml-6'/>
                <input type="text" placeholder='MOBILE' className='border-b-2 w-96 relative bottom-24 ml-6'/>
                <div className='flex flex-row gap-2 relative bottom-16 ml-6'>
                <input type="password" placeholder='PASSWORD' className='border-b-2 w-48 '/>
                <input type="password" placeholder='CONFIRM PASSWORD' className='border-b-2 w-48 '/> 
                </div>
                <button className='text-white border-1 bg-blue-500 rounded-xl w-40 h-8 ml-40 relative bottom-8'>SIGNUP</button>
                <p className='ml-6 relative bottom-4'>OR</p>
                 <div className='flex flex-row gap-4 ml-48'>
                <img src="./assets/assets/Images/2img.png" alt='in' className='h-10' ></img>
                <img src="./assets/assets/Images/2img2.png" alt='google' className='h-12' ></img>
                </div>
            </div>
        </div>
    );
};

export default Page2;
