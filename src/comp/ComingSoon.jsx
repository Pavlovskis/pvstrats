
export default function () {

    document.getElementById('').src = vidUrl

    return (
    <div class="relative flex items-center h-screen overflow-hidden">
        <div class="absolute z-30 p-5 sm:text-7xl text-5xl text-white uppercase font-audiowide sm:left-12">
            Digital <br /> Strategies
            <div class="text-xl mt-8">
                Coming Soon . . .
            </div>
        </div>
        
        <video autoplay loop muted
            class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
            <source src="/src/assets/vid3.mp4" type="video/mp4"/>
        </video>

        <div class="absolute z-30 p-2 bottom-12 left-20 bg-gradient-to-b from-cyan-600 to-purple-900 rounded-full animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                class="w-6 h-6 text-neutral-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
        </div>
    </div>
    )
}
