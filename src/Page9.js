import React from 'react'

function Page9() {
    return (
        <div class="mt-16 ml-60"style={{backgroundColor:"#EBF3FE",width:800,height:650}}>
            <img class="mt-12 ml-60" src="./assets/assets/Images/dig.png"/>
            <div class="border-2 ml-32 mt-6 bg-white" style={{width:550,height:480}}>
                <h1 class="text-zinc-100  border-2 h-14" style={{backgroundColor:"#707070"}}>ORDER DETAILS</h1>
                <div class="border-2 mt-10 ml-8" style={{width:500,height:38}}>
                     <h4 class="ml-16 mt-1">COURSE</h4> 
                     <h4 class="text-zinc-800 relative left-96 bottom-6 ml-2">PRICE</h4>
                     <div>
                         <img style={{width:"29%",height:"29%"}} class="ml-18 mt-6" src="./assets/assets/Images/aws.jpg"/>
                         <h2 class="ml-52 relative bottom-20">AWS</h2>
                         <h2 class="relative left-96 ml-2" style={{bottom:60}}>$34,999.00</h2>
                         <div class="border-2"></div>
                         <div>
                             <h6 class="ml-96">Total:34,999.00</h6>
                             <h1 class="text-slate-400 ml-92 relative left-72 mt-6">Coupen</h1>
                             <button class="border-2 border-slate-400 h-6 w-20 ml-96 relative" style={{bottom:25}}>Apply</button>
                             <div class="ml-92 relative left-72 bottom-2 "> Grand Total:34,999.00</div>
                             <button class=" border-4 h-12 w-42 ml-92 relative left-72 bottom-22 bg-blue-500 text-purple-50 ">PROCEED FOR PAYMENT </button>
                         </div>
                             
                             
                     </div>

                </div>

            </div>
            
        </div>
    )
}

export default Page9