

export default function ProjectCard({pageLink="", header, photo, details, technology}){
    return <>
        <div className="z-20 bg-background-700 rounded-xl md:w-60 w-48 pb-4 shadow shadow-[0px_0px_4px_#898989] hover:shadow-[0px_0px_8px_#898989] hover:scale-[1.05] transition border border-background-500">
            <img src={photo} alt="" className='h-36 w-72 rounded-t-xl border-b' />
            <div className="flex justify-between items-end -mt-3 mb-2">
                <h2 className="text-gray-200 font-bold text-xl pl-5 pt-7">{header}</h2>
                {
                pageLink ?
                    <a 
                        className="bg-primary-900 text-primary-100 p-1 px-2 mr-3 flex items-center rounded"
                        href={pageLink}
                        target="_blank"
                    >Visit</a>
                : ""
                }
            </div>
            <p className="text-gray-300 pl-5">{details}</p>
            <div className="pl-5 pt-3 text-primary-200 flex flex-wrap gap-1">
                {technology.map(tech => {
                   return <p className="bg-primary-900 w-fit px-2 text-sm rounded-full">{tech}</p>

                })}
            </div>
            
        </div>
    </>
}

