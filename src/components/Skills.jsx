import { motion } from 'framer-motion';

const skillsData = {
  "Programming Languages": [
    { name: "Python", image_path: "/assets/pl_lang_img/pl_py.png" },
    { name: "Java", image_path: "/assets/pl_lang_img/pl_java.jpeg" },
    { name: "JavaScript", image_path: "/assets/pl_lang_img/pl_js.png" },
    { name: "TypeScript", image_path: "/assets/pl_lang_img/pl_ts.png" },
  ],
  "Web Development Frameworks and Libraries": [
    { name: "React", image_path: "/assets/frameworks_img/fw_reactjs.png" },
    { name: "Spring", image_path: "/assets/frameworks_img/fw_sw.png" },
    { name: "Node.js", image_path: "/assets/frameworks_img/fw_nodejs.png" },
    { name: "NestJS", image_path: "/assets/frameworks_img/fw_nestjs.png" },
    { name: "ExpressJS", image_path: "/assets/frameworks_img/fw_expressjs.png" },
  ],
  "Databases": [
    { name: "MongoDB", image_path: "/assets/databases_img/db_mongo.png" },
    { name: "OracleDB", image_path: "/assets/databases_img/db_oracle.webp" },
    { name: "MySQL", image_path: "/assets/databases_img/db_mysql.png" },
    { name: "PostgreSQL", image_path: "/assets/databases_img/db_postgresql.png" },
  ],
  "Machine Learning Frameworks and Libraries": [
    { name: "Scikit-learn", image_path: "/assets/machine_learning_img/ms_sk.png" },
    { name: "TensorFlow", image_path: "/assets/machine_learning_img/ms_tf.png" },
    { name: "Pytorch", image_path: "/assets/machine_learning_img/ms_pt.png" },
    { name: "OpenCV", image_path: "/assets/machine_learning_img/ms_ocv.jpg" },
  ],
  "Some Other Tools": [
    { name: "Git", image_path: "/assets/some_more_img/new_git.png" },
    { name: "GitHub", image_path: "/assets/some_more_img/new_github.png" },
    { name: "Docker", image_path: "/assets/some_more_img/new_docker.png" },
    { name: "Hadoop", image_path: "/assets/some_more_img/new_hadoop.jpeg" },
    { name: "Apache Spark", image_path: "/assets/some_more_img/new_a_spark.png" },
  ],
};

const SkillItem = ({ name, image_path }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-6 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-gray-50 p-3 flex items-center justify-center overflow-hidden">
      <img
        src={image_path}
        alt={name}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.target.src = '/images/placeholder.png';
        }}
      />
    </div>
    <span className="text-gray-700 font-medium text-lg">{name}</span>
  </motion.div>
);

const SkillCategory = ({ category, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-100">
      {category}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 h-14 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies. Here's my technical toolkit that brings ideas to life.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <SkillCategory key={index} category={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 