import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Hotel Check-In System",
    description: "A full-stack web application build with the end to end automation of the hotel/motel check-in process.",
    type: "Personal Project",
    status: "Ongoing",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQl", "Docker", "AWS", "Git and Github"],
    projectLink: "https://github.com/yourusername/ai-task-manager",
    highlights: [
      "The process is reliable and very efficient with zero down time and faster approximatly 55% then other similar category solution.",
      "This targets small to mid level hotels and motels to automate their check-in process.",
      "The application is build with the latest technologies and is very scalable and can be used by any size of the hotel/motel."
    ]
  },
  {
    title: "Reinforcement Algorithms Compare and Contrast",
    description: "A GUI based application which compares and contrasts the performance of the Reinforcement Algorithms on standard Grid World Problem.",
    type: "Group Project",
    status: "Completed",
    technologies: ["Python", "TkInter", "Scikit Learn", "Git and Github"],
    projectLink: "https://github.com/OmNai12/Q-Learning-Project",
    highlights: [
      "Project showcases the performance of the Reinforcement Algorithms on standard Grid World Problem.",
      "Algorithms implemented are Q-Learning, Monte Carlo, Markovs Decision Process and Multi Armed Bandits.",
      "The projects main focus was to implement the Q-Learning algorithm and compare its performance with the other algorithms. Which was successfully achieved."
    ]
  },
  {
    title: "PepoleSoft UX Improvement",
    description: "A proposed project to improve the UX of the PepoleSoft website (Used by California State University, Fresno) by implementing the latest technologies and best practices which provides a better User Experience to 25000+ users of California State University, Fresno.",
    type: "Group Project - (Role : Facilitator)",
    status: "Completed",
    technologies: ["Figma", "ReactJS", "MongoDB", "Junit", "NodeJS", "Git and Github"],
    projectLink: "https://github.com/yourusername/ai-task-manager",
    highlights: [
      "The project focuses on the improvement of the UX of the website which are potentially needed to be imporoved in the existing system.",
      "Perform user testing and analysis to identify the pain points and areas for improvement. And later on developed a system which recive 95% positive feedback from the users.",
      "The application proposed iprovides 70% better effeciency then the existing system."
    ]
  },
  {
    title: "Translator and OCR Reader",
    description: "An online simple webtool which translates the input English language text, voice based input or an image to Gujarati and vice versa.",
    type: "Group Academic Project - (Semester 6 - B.Tech)",
    status: "Completed",
    technologies: ["Python", "OpenCV", "Teseract", "PIL", "JavaScript", "Flask", "HTML", "CSS", "Bootstrap", "Git and Github"],
    projectLink: "https://github.com/OmNai12/SDP---Project",
    highlights: [
      "OCR implemented based on the various image manipulation techniques and algorithms of Machine Leaning by implementation of the ANN.",
      "Achived accuracy of 87% in OCR and 93% in translation.",
      "Minimalistic UI with a simple and intuitive design along with ensurese users data safety."
    ]
  },
  {
    title: "Student Admin Portal",
    description: "An admin portal for the management of the students of a school/college.",
    type: "Personal Project",
    status: "Completed",
    technologies: ["C#", ".Net MVC", "Microsoft SQL Server", "Entity Framework", "Angular", "Git and Github"],
    projectLink: "https://github.com/OmNai12/Student-Admin-Portal",
    highlights: [
      "The portal provides a simple and intuitive interface for the admin to manage the students of a school/college.",
      "The portal is build with the latest technologies and is very scalable and can be used by any size of the school/college.",
      "System is provides relaible and secure way to manage the students of a school/college. With the feature of Outh2.0 for authentication."
    ]
  }
];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    {/* Status Badge */}
    <div className={`absolute -top-3 right-6 px-4 py-1 rounded-full ${
      project.status === 'Ongoing' 
        ? 'bg-gradient-to-r from-green-500 to-green-600'
        : 'bg-gradient-to-r from-blue-600 to-purple-600'
    }`}>
      <span className="text-sm font-medium text-white">{project.status}</span>
    </div>

    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm">{project.type}</p>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{project.description}</p>

      {/* Highlights */}
      <div className="space-y-2 mb-4 flex-grow">
        {project.highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-2 text-sm">
            <span className="text-blue-600 mt-1">→</span>
            <span className="text-gray-600">{highlight}</span>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* View Project Button */}
        {project.projectLink && (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Featured Projects</h2>
          <p className="text-gray-600 text-sm">
            A collection of projects I've worked on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 