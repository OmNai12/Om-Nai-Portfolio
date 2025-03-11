import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "California State University, Fresno",
    location: "Fresno, California, USA",
    period: "2024 - Present",
    status: "Pursuing",
    description: "Specializing in Computer Science and Machine Learning and Artificial Intelligence.",
    achievements: [
      "Current GPA: 3.7/4.0",
      "Volunteer Research Assistant : Project Hibki AI",
      "Working on Deep Learning projects, Reinforcement Learning projects"
    ]
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Dharmsinh Desai University",
    location: "Nadiad, Gujarat, India",
    period: "2020 - 2024",
    status: "Completed",
    description: "Graduated with honors in Computer Science and Engineering.",
    achievements: [
      "GPA: 3.5/4.0",
      "Led multiple technical projects"
    ]
  }
];

const EducationCard = ({ education, isLeft }) => (
  <div className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
    {/* Timeline dot and line */}
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
      <div className="w-0.5 h-full bg-gray-200"></div>
    </div>

    {/* Content */}
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all w-full max-w-lg"
    >
      {/* Current/Completed Status Badge */}
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit
        ${education.status === "Pursuing" 
          ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"}`}
          
      >
        {education.status}
      </span>

      <h3 className="text-xl font-bold text-gray-800 mb-2">{education.degree}</h3>
      <div className="text-gray-600 mb-2">
        <p className="font-medium">{education.institution}</p>
        <p className="text-sm">{education.location} • {education.period}</p>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm">{education.description}</p>
      
      <div className="space-y-2">
        {education.achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-2 text-sm">
            <span className="text-blue-600">•</span>
            <span className="text-gray-600">{achievement}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A foundation of academic excellence and continuous learning, shaping my expertise in technology and innovation.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <EducationCard 
              key={index} 
              education={education} 
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 