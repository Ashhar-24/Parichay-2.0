import React from 'react';
import { Calendar, MapPin, Award, Cpu } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                      Research Intern
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                      <Calendar className="w-4 h-4 mr-2" />
                      May 2024 - July 2024
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    IIT Dhanbad, Jharkhand, India
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Cpu className="w-5 h-5 mr-2 text-blue-600" />
                      Project: Chatbot for Disease Diagnosis
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Developed an intelligent chatbot system for disease diagnosis using Meta’s LlaMA2 model. 
                      The project involved using 'The Gayle Encyclopedia of Medicine' as the dataset to understand user symptoms and provide 
                      accurate diagnostic suggestions.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {['Python','Langchain' ,'Meta LlaMA2 Model', 'Faiss DB', 'Chainlit'].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Implemented efficient vector storage using Facebook's Faiss library</li>
                        <li>Achieved high accuracy in symptom-to-disease mapping</li>
                        <li>Optimized model performance for real-time interactions</li>
                        <li>Collaborated with research team on algorithm improvements</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;