import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              ITC Santé
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {user.role !== 'user' && (
                  <Link
                    to="/admin/dashboard"
                    className="text-gray-600 hover:text-blue-600 px-3 py-2"
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;