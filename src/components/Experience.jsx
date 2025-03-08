import { motion } from 'framer-motion';

const experienceData = [
//   {
//     role: "Software Development Engineer",
//     company: "Hibki AI",
//     location: "Fresno, California",
//     type: "Research Assistant",
//     period: "Jan 2024 - Present",
//     description: "Working on cutting-edge AI solutions and research projects.",
//     responsibilities: [
//       "Developing and implementing machine learning models for computer vision applications",
//       "Collaborating with research team on deep learning projects",
//       "Building and optimizing neural network architectures",
//       "Contributing to research papers and technical documentation"
//     ],
//     tags: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Deep Learning"]
//   },
  {
    role: "Volunteer (Full Stack Developer)",
    company: "BAPS Swaminarayan Sanstha",
    location: "Remote - USA",
    type: "Present",
    period: "Sept 2024 - Present",
    description: "Delivered end-to-end web applications for BAPS Swaminarayan Sanstha.",
    responsibilities: [
      "Developed full-stack web applications using modern technologies",
      "Implemented responsive and user-friendly interfaces",
      "Created RESTful APIs and backend services",
      "Managed database design and optimization"
    ],
    tags: ["Java", "Spring Boot", "React", "Microsoft SQL Server", "Docker", "Git and Github"]
  },
  {
    role: "Software Engineer Intern",
    company: "IQud Tek LLP (Formerly:- Full Stack Technology LLP)",
    location: "Gandhinagar, Gujarat, India",
    type: "Internship",
    period: "Dec 2023 - June 2024",
    description: "Worked on enterprise-level software development projects.",
    responsibilities: [
      "Developed software for enterprise applications which are robust and scalable",
      "Collaborated with senior developers on project implementations",
      "Participated in client meetings to discuss requirements and provide updates",
      "Scrum based development and agile methodologies",
      "Improvement of existing code base system by 40% along with resolving 25+ bugs in the current system"
    ],
    tags: ["Typescript", "Python", "PostgreSQL", "Redis","Flask", "NestJS", "NodeJS", "Git and Github", "Docker", "AWS"]
  }
];

const ExperienceCard = ({ experience }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 w-full"
  >
    {/* Type Badge */}
    <div className="absolute -top-3 right-6 px-6 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
      <span className="text-sm font-medium text-white">{experience.type}</span>
    </div>

    {/* Header */}
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
        {experience.role}
      </h3>
      <div className="text-gray-600 mt-2">
        <p className="font-medium text-lg">{experience.company}</p>
        <div className="flex items-center gap-2 text-base mt-1">
          <span>{experience.location}</span>
          <span>•</span>
          <span>{experience.period}</span>
        </div>
      </div>
    </div>

    {/* Description */}
    <p className="text-gray-600 text-base mb-6">{experience.description}</p>

    {/* Responsibilities */}
    <div className="space-y-3 mb-6">
      {experience.responsibilities.map((responsibility, index) => (
        <div key={index} className="flex items-start gap-3 text-base">
          <span className="text-blue-600 mt-1">→</span>
          <span className="text-gray-600">{responsibility}</span>
        </div>
      ))}
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      {experience.tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Professional Experience</h2>
          <p className="text-gray-600 text-sm">
            My journey through various roles and projects
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 