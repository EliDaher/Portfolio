export default function About() {
  return (
    <>
      <div
        id="about"
        className="scroll-mt-16 text-center md:text-left bg-background-800"
      >
        <div className="md:pl-20 pb-24 pt-20 rounded-b-[55px] bg-background-900">
          <p className="text-primary-300 text-5xl font-bold select-none w-full">
            Full-Stack Developer building scalable web systems for real
            businesses
          </p>

          <div className="text-lg px-4 md:px-0 text-text-100 md:w-[60vw] w-full mt-6 space-y-4">
            <p>
              I design and build custom web applications from scratch, focusing
              on performance, scalability, and clean user experience — delivered
              on time and aligned with business goals.
            </p>
            <p>
              My expertise includes developing inventory management systems,
              e-commerce platforms, and real-time chat applications. I also
              bring a strong background in accounting and data entry, adding a
              business-focused perspective to every project.
            </p>
            <ul className="flex flex-wrap gap-3 mt-4 text-sm">
              {[
                "React",
                "TypeScript",
                "N8N",
                "Node.js",
                "Tailwind",
                "MySQL",
                "Firebase",
                "Socket.IO",
                "Python",
              ].map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 bg-background-700 rounded-full text-primary-300"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <p>
              <a
                href="#contact"
                className="inline-block mt-2 px-4 py-2 bg-primary-500 text-background-900 font-semibold rounded hover:bg-primary-600 transition"
              >
                Start a project
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
