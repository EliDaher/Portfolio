export default function ProjectCard({
  pageLink = "",
  header,
  photo,
  details,
  technology,
  featured = false,
}) {
  return (
    <div
      className={`group z-20 p-4 bg-background-800 rounded-2xl w-72 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border ${
        featured ? "border-primary-500" : "border-background-600"
      }`}
    >
      {featured && (
        <span className="text-xs text-primary-400 uppercase tracking-wider mb-2 inline-block">
          Featured Project
        </span>
      )}

      <div className="overflow-hidden rounded-xl h-40 mb-4">
        <img
          src={photo}
          alt={header}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
        />
      </div>

      <div className="flex justify-between items-start mb-2 px-1 gap-2">
        <h2 className="text-gray-100 font-semibold text-lg line-clamp-2">
          {header}
        </h2>
        {pageLink && (
          <a
            href={pageLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 hover:bg-primary-500 text-background-900 text-xs font-medium px-3 py-1 rounded-full transition whitespace-nowrap"
          >
            Live Demo
          </a>
        )}
      </div>

      <p className="text-gray-400 text-sm mb-3 px-1 line-clamp-3">{details}</p>

      <p className="text-xs text-gray-500 mb-2 px-1">Tech stack</p>

      <div className="flex flex-wrap gap-2 px-1">
        {technology.map((tech, index) => (
          <span
            key={index}
            className="bg-primary-900 text-primary-100 text-xs px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
