import { motion } from 'framer-motion';
import { HeartIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const userName = "John"; // This would come from user context/state in a real app

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
      >
        <h1 className="text-2xl font-bold text-primary-dark">
          Good morning, {userName}!
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Ready for a great day of fitness?
        </p>
      </motion.div>

      {/* Health Summary Cards */}
      <div className="grid grid-cols-1 gap-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <HeartIcon className="w-8 h-8 text-red-500" />
            <div>
              <h2 className="text-xl font-semibold text-primary-dark">Heart Rate</h2>
              <p className="text-2xl font-bold text-gray-800">72 BPM</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <ClockIcon className="w-8 h-8 text-blue-500" />
            <div>
              <h2 className="text-xl font-semibold text-primary-dark">Activity Time</h2>
              <p className="text-2xl font-bold text-gray-800">45 min</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <ChartBarIcon className="w-8 h-8 text-green-500" />
            <div>
              <h2 className="text-xl font-semibold text-primary-dark">Today's Progress</h2>
              <p className="text-2xl font-bold text-gray-800">75%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recommended Workout */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-gradient-to-r from-secondary-light to-secondary-dark rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-xl font-bold text-white">Recommended Workout</h2>
        <p className="text-white mt-2">Gentle Yoga Flow</p>
        <p className="text-white/80 mt-1">30 minutes • Low intensity</p>
        <button className="mt-4 bg-white text-secondary-dark px-6 py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-white/90 transition-colors">
          Start Workout
        </button>
      </motion.div>
    </div>
  );
};

export default Home; 