import { useState } from "react"

export default function Navbar() {
    const [active, setActive] = useState(false)

    return (
        <>
            <div className="sticky top-0 left-0 z-50 flex items-center justify-between bg-background-800 p-2 shadow-md shadow-background-700 select-none">
                {/* Logo */}
                <div className="text-3xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-primary-500 to-secondary-300">
                    Eli Daher
                </div>

                {/* Navbar Links */}
                <div className={`
                    absolute top-0 h-screen w-60 bg-background-700 flex flex-col transition-all duration-300
                    ${active ? "right-0 opacity-100 pointer-events-auto" : "-right-60 opacity-0 pointer-events-none"}
                    text-lg
                    md:sticky md:flex-row md:h-full md:flex md:items-center md:justify-between md:bg-background-800 md:opacity-100 md:pointer-events-auto
                `}>
                    {/* Close Button (Only Mobile) */}
                    <div className="md:hidden flex ml-auto p-4" onClick={() => setActive(false)}>
                        <i className='bx bx-x text-primary-400 text-4xl font-extrabold'></i>
                    </div>

                    {/* Links */}
                    <a className="my-1 p-2 text-center text-secondary-200 font-bold hover:bg-background-600 md:rounded"
                        href="#about" onClick={() => active && setActive(false)}>About</a>
                    
                    <a className="my-1 p-2 text-center text-secondary-200 font-bold hover:bg-background-600 md:rounded"
                        href="#Projects" onClick={() => active && setActive(false)}>Projects</a>
                    
                    <a className="my-1 p-2 text-center text-secondary-200 font-bold hover:bg-background-600 md:rounded"
                        href="#contact" onClick={() => active && setActive(false)}>Contact</a>
                </div>

                {/* Menu Icon (Only Mobile) */}
                <div className="md:hidden flex p-4" onClick={() => setActive(true)}>
                    <i className='bx bx-menu text-primary-400 text-2xl font-extrabold'></i>
                </div>
            </div>
        </>
    )
}
