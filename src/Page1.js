import React from 'react'
import Digital from "../src/Images/img1.png"

function Page1() {
    return (

        <div>
            <div className='flex'>      
           <div class="inline-flex items-baseline">
            <img src={Digital} style={{height:"16px;"}} class="inline -mt-20 ml-20"/>
                </div>
                <div>
                <ul class="display:inline; px-52 flex justify-center items-center mt-4 space-x-24">
                <li>courses</li>
                <li>programs </li>
                <li>contact Us</li>
                <button type="button" class="bg-sky-500 border-black rounded-xl">Get trained</button>
            </ul>
                </div>
            </div>
        </div>
       
    );
};

export default Page1;
