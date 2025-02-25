import photo from '../assets/PortfolioIcon.png'

export default function Header(){
    
    return <>
        <div id='header' className='scroll-mt-16 bg-background-800 pb-14 rounded-b-[55px] reletive z-10'>
            <i className='bx bx-code-alt animate-[bounce_3s_infinite] text-8xl absolute top-[25%] left-[64%] text-background-700 -z-10'></i>
            <i className='bx bxl-visual-studio animate-[bounce_3s_infinite] text-6xl absolute top-[15%] left-[4%] text-background-700 -z-10'></i>
            <i className='bx bxl-php animate-[bounce_5s_infinite] text-5xl absolute top-[10%] left-[44%] text-background-700 -z-10'></i>
            <i className='bx bxl-tailwind-css animate-[bounce_2s_infinite] text-8xl absolute top-[29%] left-[24%] text-background-700 -z-10'></i>
            <i className='bx bxl-react animate-[bounce_4s_infinite] text-7xl absolute top-[13%] left-[80%] text-background-700 -z-10'></i>
            <i className='hidden md:block bx bxl-javascript animate-[bounce_3.5s_infinite] text-7xl absolute top-[42%] left-[75%] text-background-700 -z-10'></i>
            <i className='hidden md:block bx bxl-git animate-[bounce_1s_infinite] text-7xl absolute top-[40%] left-[10%] text-background-700 -z-10'></i>
            <img src={photo} alt="" className='w-32 h-32 rounded-full border border-primary-800 mx-auto my-12'/>
            <p className='bg-clip-text animated-background bg-gradient-to-l from-primary-500 to-secondary-400 via-blue-500 text-transparent text-5xl font-extrabold font-mono text-center select-none'>Hi  I'm Eli Daher</p>
        </div>
    </>
}