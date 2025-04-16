import { Link } from 'react-router-dom';
import { HomeIcon, FireIcon, UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex flex-col items-center justify-center w-20 h-16 text-primary-dark hover:text-primary-light transition-colors"
          >
            <HomeIcon className="w-8 h-8" />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <Link
            to="/workout"
            className="flex flex-col items-center justify-center w-20 h-16 text-secondary-dark hover:text-secondary-light transition-colors"
          >
            <FireIcon className="w-8 h-8" />
            <span className="text-sm font-medium">Workout</span>
          </Link>
          <Link
            to="/profile"
            className="flex flex-col items-center justify-center w-20 h-16 text-accent-dark hover:text-accent-light transition-colors"
          >
            <UserIcon className="w-8 h-8" />
            <span className="text-sm font-medium">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 