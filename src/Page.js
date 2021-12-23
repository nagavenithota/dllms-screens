import React from 'react'

function Page() {
    return (
        <div class="bg-lime-500 max-w-xs ml-96">
            <center><h1 class="text-4xl">LOGIN</h1></center><br/>
            <center>Email:<input type="text" placeholder="enter the user name" class="border-2 border-black"></input></center><br/>
            <center>Pass word:<input type="text" placeholder="enter the password" class="border-2 border-black"></input></center><br/>
            <center><buton class="border-2 border-black">SUBMIT</buton></center>
        </div>
    )
};

export default Page
