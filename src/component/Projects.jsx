import Almas from '../assets/Almas.png'
import TodoList from '../assets/TodoList.png'
import SpeedTest from '../assets/SpeedTest.png'
import snake from '../assets/snake.png'
import DaherNet from '../assets/DaherNet.png'
import Chat from '../assets/Chat.png'
import Inventory from '../assets/Inventory.png'
import ProjectCard from './ProjectCard'


export default function Projects(){
    return (
      <>
        <div
          id="Projects"
          className="scroll-mt-16 text-white bg-background-800 pb-12 rounded-b-[55px] relative"
        >
          <i
            className="bx bxs-data animate-[bounce_3s_infinite] opacity-30 blur-[1px]
             text-8xl absolute top-[25%] left-[85%] text-background-700 z-10"
          ></i>
          <i
            className="bx bxl-python animate-[bounce_3s_infinite] opacity-30 blur-[1px]
             text-6xl absolute top-[15%] left-[0%] text-background-700 z-10"
          ></i>
          <i className="bx bxl-tailwind-css animate-[bounce_2s_infinite] opacity-30 blur-[1px] text-8xl absolute top-[70%] left-[80%] text-background-700 z-10"></i>
          <div className="text-left">
            <h1 className="font-medium text-4xl my-4 mb-8 text-primary-600 ml-16 max-w-3xl leading-relaxed">
              These projects reflect my experience building scalable,
              business-focused systems.
            </h1>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-4xl my-6 text-primary-400">
              Real-World Projects
            </h1>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap w-[90%] mx-auto my-8">
            <ProjectCard
              featured
              header={"Daher.Net"}
              photo={DaherNet}
              details={`Full-featured ERP system for managing invoices, inventory, balances, and real-time financial data,
                          built for real business operations.
                      `}
              technology={["TypeScript", "Tailwind", "React", "FireBase"]}
            />
            <ProjectCard
              featured
              header={"Local Chat App"}
              photo={Chat}
              details={`Real-time chat application Working local To STE in Hama.
                      `}
              technology={[
                "Socket.IO",
                "TypeScript",
                "Tailwind",
                "React",
                "FireBase",
              ]}
            />
            <ProjectCard
              featured
              header={"Inventory Management System"}
              photo={Inventory}
              details={`Comprehensive inventory management system for tracking stock levels,
                          orders, and suppliers, designed to streamline business operations.
                      `}
              technology={[
                "React",
                "TypeScript",
                "Tailwind",
                "FireBase",
                "Recharts"
              ]}
            />
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-3xl my-6 text-primary-600 opacity-50">
              Just For Fun
            </h1>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap w-[90%] mx-auto my-8">
            <ProjectCard
              pageLink={"https://elidaher.github.io/SnakeGame/"}
              header={"Snake Game"}
              photo={snake}
              details={"If you're feeling bored try this classic Snake Game"}
              technology={["JS", "CSS", "HTML"]}
            />
            <ProjectCard
              pageLink={"https://elidaher.github.io/SpeedTest/"}
              header={"Speed Test"}
              photo={SpeedTest}
              details={"Test your typing speed"}
              technology={["JS", "CSS", "HTML"]}
            />
          </div>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary-500 text-background-900 font-semibold rounded-lg hover:bg-primary-600 transition"
            >
              Interested in working together?
            </a>
          </div>
        </div>
      </>
    );
}