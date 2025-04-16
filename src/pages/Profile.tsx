import { motion } from 'framer-motion';
import { UserCircleIcon, Cog6ToothIcon, BellIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const Profile = () => {
  return (
    <div className="space-y-6 pb-20">
      {/* User Profile */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
      >
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center">
            <UserCircleIcon className="w-16 h-16 text-primary-dark" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">John Doe</h1>
            <p className="text-gray-600">Age: 65</p>
            <p className="text-gray-600">Member since 2024</p>
          </div>
        </div>
      </motion.div>

      {/* Health Stats */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-xl font-bold text-primary-dark mb-4">Health Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary-light/50 rounded-xl p-4">
            <p className="text-gray-600">Weekly Activity</p>
            <p className="text-2xl font-bold text-primary-dark">4.5 hours</p>
          </div>
          <div className="bg-secondary-light/50 rounded-xl p-4">
            <p className="text-gray-600">Average Heart Rate</p>
            <p className="text-2xl font-bold text-secondary-dark">72 BPM</p>
          </div>
          <div className="bg-accent-light/50 rounded-xl p-4">
            <p className="text-gray-600">Workouts Completed</p>
            <p className="text-2xl font-bold text-accent-dark">12</p>
          </div>
          <div className="bg-primary-light/50 rounded-xl p-4">
            <p className="text-gray-600">Streak</p>
            <p className="text-2xl font-bold text-primary-dark">5 days</p>
          </div>
        </div>
      </motion.div>

      {/* Settings */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-xl font-bold text-primary-dark mb-4">Settings</h2>
        <div className="space-y-4">
          <button className="flex items-center space-x-4 w-full p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <Cog6ToothIcon className="w-6 h-6 text-primary-dark" />
            <span className="text-lg">Account Settings</span>
          </button>
          <button className="flex items-center space-x-4 w-full p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <BellIcon className="w-6 h-6 text-primary-dark" />
            <span className="text-lg">Notifications</span>
          </button>
          <button className="flex items-center space-x-4 w-full p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <AdjustmentsHorizontalIcon className="w-6 h-6 text-primary-dark" />
            <span className="text-lg">Accessibility</span>
          </button>
        </div>
      </motion.div>

      {/* Emergency Contacts */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-red-50 rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-xl font-bold text-red-600 mb-4">Emergency Contacts</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white rounded-xl">
            <div>
              <p className="font-semibold">Dr. Smith</p>
              <p className="text-gray-600">Primary Care Physician</p>
            </div>
            <button className="text-red-600 hover:text-red-700">Call</button>
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-xl">
            <div>
              <p className="font-semibold">Emergency Services</p>
              <p className="text-gray-600">911</p>
            </div>
            <button className="text-red-600 hover:text-red-700">Call</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile; 