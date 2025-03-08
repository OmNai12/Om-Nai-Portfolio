import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: "AI-Powered Task Management",
    description: "A smart task management system that uses AI to prioritize and categorize tasks. Features include natural language processing for task input and intelligent task scheduling.",
    type: "Personal Project",
    status: "Ongoing",
    technologies: ["Python", "React", "FastAPI", "PostgreSQL", "Docker"],
    projectLink: "https://github.com/yourusername/ai-task-manager",
    highlights: [
      "Implemented machine learning algorithms for task prioritization",
      "Built RESTful API with FastAPI serving 1000+ requests daily",
      "Achieved 90% accuracy in task categorization"
    ]
  },
  {
    title: "E-Commerce Analytics Dashboard",
    description: "An offline analytics dashboard for e-commerce platforms that provides insights into sales patterns, inventory management, and customer behavior.",
    type: "Academic Project",
    status: "Completed",
    technologies: ["Java", "Spring Boot", "MySQL", "React", "Chart.js"],
    projectLink: "https://github.com/yourusername/ecommerce-analytics",
    highlights: [
      "Developed comprehensive reporting system with 15+ types of analytics",
      "Implemented real-time data processing pipeline",
      "Reduced report generation time by 60%"
    ]
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS, featuring responsive design and smooth animations.",
    type: "Personal Project",
    status: "Completed",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    projectLink: "https://your-portfolio.com",
    highlights: [
      "Implemented responsive design for all screen sizes",
      "Added smooth animations and transitions",
      "Optimized performance and accessibility"
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