import vidUrl from "../assets/vid3.mp4"

import Navbar from "./Navbar"

export default function () {

    return (
        <div>
            <div class="relative flex items-center h-screen overflow-hidden"> 

                <div class="absolute z-30 sm:left-20 top-0 nav-box">
                    
                </div>
 

                <div class="absolute z-30 p-5 sm:text-7xl text-5xl uppercase font-audiowide sm:left-12 text-grad">
                    <div class="flex ">
                        <div class="font-semibold">
                            Digital<br />
                            <div class="">
                                Strategies
                            </div>
                        </div>
                        <div class="ml-16">
                            
                        </div>
                    </div>
                    <div class="text-xl mt-8">
                        Coming Soon . . .
                    </div>
                </div>
  
                <video autoplay loop muted
                    class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                    <source src={ vidUrl } type="video/mp4"/>
                </video>

                <div class="absolute z-30 p-2 bottom-20 sm:left-20 left-8 bg-gradient-to-b from-cyan-600 to-purple-900 rounded-full animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                        class="w-6 h-6 text-neutral-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
