import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminLayout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed w-64 bg-white h-screen p-4 border-r">
        <h2 className="text-xl font-bold mb-8">Admin Dashboard</h2>
        <nav className="space-y-2">
          <Link to="/admin/articles" className="block p-2 hover:bg-gray-100 rounded">
            Articles
          </Link>
          {user?.role === 'superadmin' && (
            <Link to="/admin/users" className="block p-2 hover:bg-gray-100 rounded">
              Users
            </Link>
          )}
          <button
            onClick={logout}
            className="w-full text-left p-2 hover:bg-gray-100 rounded text-red-600"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;