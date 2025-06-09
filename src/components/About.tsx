import React from 'react';
import { Code2, Database, Terminal, Wrench } from 'lucide-react';

const About: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['C', 'C++', 'JavaScript', 'Python'],
      color: 'bg-blue-500',
    },
    {
      title: 'Frontend Development',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'React.js'],
      color: 'bg-green-500',
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      skills: ['Express.js', 'Node.js', 'MySQL'],
      color: 'bg-purple-500',
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-6 h-6" />,
      skills: [ 'Git' , 'GitHub', 'VS Code'],
      color: 'bg-orange-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am an aspiring software developer currently in my final year (Graduating in 2025) at EIB, A Center of RGIPT, an Institute of National Importance along the lines of IITs.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about creating innovative solutions and have experience in full-stack development. My journey in software development has been driven by curiosity and a desire to solve real-world problems through technology.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Data Structures', 'Algorithms', 'Problem Solving', 'Full-Stack Development', 'Open Source'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className={`${category.color} p-2 rounded-lg text-white mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;