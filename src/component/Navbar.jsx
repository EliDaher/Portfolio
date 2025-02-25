import { useState } from "react"


export default function Navbar(){
    const [active, setActive] = useState(false)

    return<>
        <div className="sticky top-0 left-0 flex items-center justify-between bg-background-800 p-2 shadow-md shadow-background-700 select-none z-40">
            <div className="text-xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-primary-500 to-secondary-300 font-bold w-24">Eli Daher</div>
            <div className={`
            ${active ?
            "right-0" 
                :
            "-right-60"}
            absolute
            flex
            flex-col
            bg-background-700
            h-screen
            top-0
            w-60
            transition-all

            
            
            md:sticky
            md:flex-row
            md:h-full
            md:flex 
            md:items-center 
            md:justify-between 
            md:bg-background-800`}>
                <div className="md:hidden flex ml-auto" onClick={() => setActive(!active)}>
                    <i className='bx bx-x text-primary-400 text-4xl font-extrabold'></i>
                </div>
                <a className="my-1 p-2 text-center text-secondary-200 font-bold hover:bg-background-600 md:rounded" href="#about" onClick={() => setActive(!active)}>About</a>
                <a className="my-1 p-2 text-center text-secondary-200 font-bold hover:bg-background-600 md:rounded" href="#Projects" onClick={() => setActive(!active)}>Projects</a>
                <a className="my-1 p-2 text-center text-secondary-200 font-bold hover:bg-background-600 md:rounded" href="#contact" onClick={() => setActive(!active)}>Contact</a>
            </div>
            <div className="hidden md:flex">
                <i className='bx bx-code-alt w-28 text-right text-primary-500 text-2xl font-extrabold'></i>
            </div>
            <div className="md:hidden flex" onClick={() => setActive(!active)}>
                <i className='bx bx-menu text-primary-400 text-2xl font-extrabold'></i>
            </div>
        </div>
    </>
}