import photo from '../assets/PortfolioIcon.png'

export default function Header(){
    
    return <>
        <div id='header' className='scroll-mt-16 bg-background-800 pt-14 pb-20 rounded-b-[55px] reletive z-10'>
            <i className='bx bx-code-alt animate-[bounce_3s_infinite] text-8xl absolute top-[25%] left-[64%] text-background-700 -z-10'></i>
            <i className='bx bxl-visual-studio animate-[bounce_3s_infinite] text-6xl absolute top-[15%] left-[4%] text-background-700 -z-10'></i>
            <i className='bx bxl-php animate-[bounce_5s_infinite] text-5xl absolute top-[20%] left-[44%] text-background-700 -z-10'></i>
            <i className='bx bxl-tailwind-css animate-[bounce_2s_infinite] text-8xl absolute top-[29%] left-[24%] text-background-700 -z-10'></i>
            <i className='bx bxl-react animate-[bounce_4s_infinite] text-7xl absolute top-[63%] left-[80%] text-background-700 -z-10'></i>
            <i className='hidden md:block bx bxl-javascript animate-[bounce_3.5s_infinite] text-7xl absolute top-[42%] left-[75%] text-background-700 -z-10'></i>
            <i className='hidden md:block bx bxl-git animate-[bounce_1s_infinite] text-7xl absolute top-[50%] left-[10%] text-background-700 -z-10'></i>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='md:w-1/3 flex justify-center items-center py-6'>
                    <img src={photo} alt="" className='w-72 h-72 rounded-full border border-primary-800 mx-auto'/>
                </div>
                <div className='text-center md:w-2/3 pt-8'>
                    <h1 className='bg-clip-text animated-background bg-gradient-to-l from-primary-500 to-secondary-400 via-blue-500 text-transparent text-7xl md:text-8xl font-extrabold font-mono text-center select-none'>Eli Daher</h1>
                    <h3 className='text-3xl md:text-5xl px-2 bg-clip-text animated-background bg-gradient-to-l from-primary-500 to-secondary-400 via-blue-500 text-transparent font-semibold mt-5 font-mono pb-2 select-none'>
                        In the quiet of the console, <br/> I orchestrate impactful change.
                    </h3>
                </div>
            </div>
        </div>
    </>
}