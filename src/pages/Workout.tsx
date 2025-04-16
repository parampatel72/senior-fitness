import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Workout = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="space-y-6 pb-20">
      {/* Current Exercise */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
      >
        <h1 className="text-2xl font-bold text-primary-dark mb-4">
          Gentle Yoga Flow
        </h1>
        
        <div className="aspect-video bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
          <span className="text-gray-400">Exercise Video</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Mountain Pose</h2>
            <p className="text-gray-600">Hold for 30 seconds</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isMuted ? (
                <SpeakerXMarkIcon className="w-6 h-6 text-gray-600" />
              ) : (
                <SpeakerWaveIcon className="w-6 h-6 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-primary-dark text-white hover:bg-primary-light transition-colors"
            >
              {isPlaying ? (
                <PauseIcon className="w-6 h-6" />
              ) : (
                <PlayIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-secondary-dark h-4 rounded-full"
            style={{ width: '60%' }}
          ></div>
        </div>
      </motion.div>

      {/* Exercise Instructions */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-xl font-bold text-primary-dark mb-4">
          Instructions
        </h2>
        <ol className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center text-primary-dark font-bold mr-3">
              1
            </span>
            Stand with feet together, arms at your sides
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center text-primary-dark font-bold mr-3">
              2
            </span>
            Press your feet firmly into the ground
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center text-primary-dark font-bold mr-3">
              3
            </span>
            Lengthen your spine and relax your shoulders
          </li>
        </ol>
      </motion.div>

      {/* Emergency Support */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-red-50 rounded-2xl p-6 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-red-600">Emergency Support</h2>
            <p className="text-red-500">Available 24/7</p>
          </div>
          <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-colors">
            <PhoneIcon className="w-5 h-5" />
            <span>Call for Help</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Workout; 