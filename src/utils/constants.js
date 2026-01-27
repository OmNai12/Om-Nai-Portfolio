import { Github, Linkedin, Mail } from 'lucide-react';

export const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
];

export const socialLinks = [
    { Icon: Github, href: "https://github.com" },
    { Icon: Linkedin, href: "https://linkedin.com" },
    { Icon: Mail, href: "mailto:contact@omnai.com" }
];

export const skills = {
    languages: [
        { name: 'Python', icon: '/assets/images/pl_lang_img/pl_py.png' },
        { name: 'Java', icon: '/assets/images/pl_lang_img/pl_java.jpeg' },
        { name: 'JavaScript', icon: '/assets/images/pl_lang_img/pl_js.png' },
        { name: 'TypeScript', icon: '/assets/images/pl_lang_img/pl_ts.png' },
        { name: 'C#', icon: '/assets/images/pl_lang_img/pl_c#.jpeg' },
    ],
    frameworks: [
        { name: 'React', icon: '/assets/images/frameworks_img/fw_reactjs.png' },
        { name: 'Node.js', icon: '/assets/images/frameworks_img/fw_nodejs.png' },
        { name: 'NestJS', icon: '/assets/images/frameworks_img/fw_nestjs.png' },
        { name: 'Express', icon: '/assets/images/frameworks_img/fw_expressjs.png' },
    ],
    databases: [
        { name: 'PostgreSQL', icon: '/assets/images/databases_img/db_postgresql.png' },
        { name: 'MongoDB', icon: '/assets/images/databases_img/db_mongo.png' },
        { name: 'MySQL', icon: '/assets/images/databases_img/db_mysql.png' },
        { name: 'Oracle', icon: '/assets/images/databases_img/db_oracle.webp' },
    ],
    ml: [
        { name: 'TensorFlow', icon: '/assets/images/machine_learning_img/ms_tf.png' },
        { name: 'PyTorch', icon: '/assets/images/machine_learning_img/ms_pt.png' },
        { name: 'Scikit-learn', icon: '/assets/images/machine_learning_img/ms_sk.png' },
        { name: 'OpenCV', icon: '/assets/images/machine_learning_img/ms_ocv.jpg' },
    ],
};

export const education = [
    {
        id: 1,
        institution: 'University of Technology',
        degree: 'Master of Science in Computer Science',
        duration: '2024 - 2026',
        description: 'Major in Artificial Intelligence and Machine Learning. Carrying out research in Deep Learning implementations.',
    },
    {
        id: 2,
        institution: 'Institute of Engineering',
        degree: 'Bachelor of Technology in Information Technology',
        duration: '2020 - 2024',
        description: 'Foundation in Computer Science, Data Structures, and Algorithms. Graduated with First Class Honors.',
    },
];

export const experience = [
    {
        id: 1,
        company: 'Tech Innovators Inc.',
        role: 'Software Developer',
        duration: '2024 - Present',
        description: 'Developing high-performance web applications using React and Node.js. Implementing AI-driven features for data analysis.',
        tech: ['React', 'Node.js', 'Python', 'AWS'],
    },
    {
        id: 2,
        company: 'Data Systems Ltd.',
        role: 'Junior ML Engineer Intern',
        duration: '2023 - 2024',
        description: 'Assisted in building computer vision models for quality control. Optimized data processing pipelines using Python.',
        tech: ['Python', 'TensorFlow', 'OpenCV'],
    },
];

export const projects = [
    {
        id: 1,
        title: 'AI Portfolio Generator',
        description: 'An intelligent application that generates portfolio websites based on user data using Generative AI.',
        tech: ['React', 'OpenAI API', 'Node.js', 'Tailwind'],
        category: 'Full-Stack',
        image: '/assets/images/projects/project1.png', // Placeholder
        links: {
            github: 'https://github.com',
            demo: 'https://demo.com',
        },
    },
    {
        id: 2,
        title: 'E-Commerce Analytics',
        description: 'Real-time dashboard for monitoring sales and user behavior with predictive analytics.',
        tech: ['Next.js', 'Python', 'Scikit-learn', 'PostgreSQL'],
        category: 'ML/AI',
        image: '/assets/images/projects/project2.png', // Placeholder
        links: {
            github: 'https://github.com',
            demo: 'https://demo.com',
        },
    },
    {
        id: 3,
        title: 'Smart Task Manager',
        description: 'Collaborative task management tool with NLP-based task categorization and prioritizing.',
        tech: ['Vue.js', 'Firebase', 'TensorFlow.js'],
        category: 'Web Dev',
        image: '/assets/images/projects/project3.png', // Placeholder
        links: {
            github: 'https://github.com',
            demo: 'https://demo.com',
        },
    },
];
