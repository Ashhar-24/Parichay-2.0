import React from 'react';
import { Trophy, Star, Code, ExternalLink, TrendingUp } from 'lucide-react';

const CodingProfiles: React.FC = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      username: 'ashhar-24',
      stats: {
        solved: '480+',
        rating: '1875',
        badge: 'Knight',
      },
      description: 'Active problem solver with consistent performance',
      color: 'from-orange-500 to-red-500',
      icon: <img src="/photos/icons8-leetcode-24.png" className="w-8 h-8" alt="LeetCode" />,
      link: 'https://leetcode.com/u/ashhar_24/',
      achievements: [
        'knight (top 5% globally)',
        'Max rating: 1875',
        '480+ problems solved',
      ]
    },
    {
      platform: 'CodeChef',
      username: 'ashhar_24',
      stats: {
        solved: '215+',  
        rating: '1703+',
        badge: '3★',
      },
      description: 'Consistent performer in weekly challenges',
      color: 'from-amber-500 to-orange-500',
      icon: <img src="/photos/icons8-codechef-48.png" className="w-8 h-8" />,
      link: 'https://www.codechef.com/users/ashhar_24',
      achievements: [
        '3-star rated coder',
        'Max rating: 1703',
        'Regular contest participation (40+ contests)'
      ]
    },
    {
      platform: 'Codeforces',
      username: 'Cp_Geek',
      stats: {
        solved: '270+',
        rating: '1230+',
        badge: 'Pupil',
      },
      description: 'Strong foundation in data structures and algorithms',
      color: 'from-green-500 to-teal-500',
      icon: <img src="/photos/icons8-codeforces-24.png" className="w-8 h-8" />,
      link: 'https://codeforces.com/profile/Cp_Geek',
      achievements: [
        'Pupil',
        'Max rating: 1237',
        '270+ problems solved'
      ]
    },
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Coding Profiles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My competitive programming journey and achievements across various platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <div
              key={profile.platform}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${profile.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 opacity-20 transform rotate-12 translate-x-4 -translate-y-4">
                  <div className="text-6xl">
                    {profile.icon}
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      {profile.icon}
                    </div>
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{profile.platform}</h3>
                  <p className="text-white/90 text-sm">{profile.description}</p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(profile.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-2 mb-6">
                  {profile.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {achievement}
                    </div>
                  ))}
                </div>

                {/* Visit Profile Button */}
                <a
                  href={profile.link}
                  target="_blank"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats Summary */}
        {/* <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Overall Statistics
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                1100+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Total Problems Solved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                3
              </div>
              <div className="text-gray-600 dark:text-gray-400">Active Platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                1795
              </div>
              <div className="text-gray-600 dark:text-gray-400">Highest Rating</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CodingProfiles;
