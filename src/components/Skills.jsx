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
  <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-50 p-2 flex items-center justify-center overflow-hidden">
      <img
        src={image_path}
        alt={name}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.target.src = '/images/placeholder.png';
        }}
      />
    </div>
    <span className="text-gray-700 font-medium">{name}</span>
  </div>
);

const SkillCategory = ({ category, skills }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
      {category}
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 text-sm">
            Technologies and tools I work with
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <SkillCategory key={index} category={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 