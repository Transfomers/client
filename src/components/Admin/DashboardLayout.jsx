import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <aside className="w-64 bg-white shadow-md min-h-screen p-4">
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
          <nav className="space-y-2">
            <Link to="/admin/dashboard" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">
              Dashboard
            </Link>
            <Link to="/admin/articles" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">
              Articles
            </Link>
            <Link to="/admin/users" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">
              Users
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
