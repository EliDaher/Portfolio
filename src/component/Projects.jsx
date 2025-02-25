import Almas from '../assets/Almas.png'
import TodoList from '../assets/TodoList.png'
import SpeedTest from '../assets/SpeedTest.png'
import snake from '../assets/snake.png'
import DaherNet from '../assets/DaherNet.png'
import ProjectCard from './ProjectCard'


export default function Projects(){
    return<>
        <div id='Projects' className="scroll-mt-16 text-white bg-background-800 pb-12 rounded-b-[55px] relative">
            <i className='bx bxs-data animate-[bounce_3s_infinite] text-8xl absolute top-[25%] left-[85%] text-background-700 z-10'></i>
            <i className='bx bxl-python animate-[bounce_3s_infinite] text-6xl absolute top-[15%] left-[0%] text-background-700 z-10'></i>
            <i className='bx bxl-tailwind-css animate-[bounce_2s_infinite] text-8xl absolute top-[70%] left-[80%] text-background-700 z-10'></i>
            <i className='bx bxl-html5 animate-[bounce_4s_infinite] text-7xl absolute top-[57%] left-[10%] text-background-700 z-10'></i>
            <i className='hidden md:block bx bxl-javascript animate-[bounce_3.5s_infinite] text-7xl absolute top-[8%] left-[20%] text-background-700 z-10'></i>
            <div className='text-center'>
                <h1 className='font-bold text-4xl my-6 text-primary-400'>My Projects</h1>
            </div>
            <div className='flex items-center justify-center gap-6 flex-wrap w-[90%] mx-auto my-8'>
                <ProjectCard header={"Almas"} photo={Almas} details={"Online Store for hand made staff"} technology={["Bootstrap", "React"]}/>
                <ProjectCard header={"Daher.Net"} photo={DaherNet} details={"Invoice and Inventory managment system with ERP interface"} technology={["tailwind", "React", "FireBase"]}/>
                <ProjectCard pageLink={"https://elidaher.github.io/SnakeGame/"} header={"Snake Game"} photo={snake} details={"If you're feeling bored try this classic Snake Game"} technology={["JS", "CSS", "HTML"]}/>
                <ProjectCard pageLink={"https://elidaher.github.io/TodoList/"} header={"ToDo List"} photo={TodoList} details={"Record your Todos and save them"} technology={["JS", "CSS", "HTML"]}/>
                <ProjectCard pageLink={"https://elidaher.github.io/SpeedTest/"} header={"Speed Test"} photo={SpeedTest} details={"Try your Typing speed"} technology={["JS", "CSS", "HTML"]}/>
            </div>
        </div>
    </>
}