import React from 'react';
import { ExternalLink, Github, Brain, Chrome } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Chrome Extension - Text Summarizer',
      description: 'A powerful Chrome extension that summarizes lengthy web content, research papers, and articles using Gemini/Hugging Face into three different formats: brief, detailed and bullets.',
      image: '/src/photos/chromeExtension.png?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'Gemini API', 'Hugging Face API', 'HTML', 'TailwindCSS'],
      github: 'https://github.com/Ashhar-24/AI-Summarizer',
      demo: 'https://www.youtube.com/watch?v=dJZvF67DHY0',
      icon: <Chrome className="w-8 h-8" />,
      featured: true,
    },
    {
      title: 'Chatbot for Disease Diagnosis',
      description: `Developed an intelligent chatbot system for disease diagnosis using Meta’s LlaMA2 model, using 'The Gayle Encyclopedia of Medicine' as the dataset to understand user symptoms and provide 
                      accurate diagnostic suggestions.`,
      image: '/src/photos/medChatbot.png?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python','Langchain' ,'Meta Llama2 Model', 'Faiss DB', 'Chainlit'],
      github: 'https://github.com/Ashhar-24/Llama2-Medical-Chatbot',
      demo: 'https://github.com/Ashhar-24/Llama2-Medical-Chatbot',
      icon: <Brain className="w-8 h-8" />,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in software development and problem-solving.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group ${
                project.featured
                  ? 'lg:grid-cols-2'
                  : 'lg:grid-cols-2'
              } grid gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-6">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                    {project.icon}
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors flex items-center space-x-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;