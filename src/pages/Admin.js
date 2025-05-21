import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

const Admin = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user.role !== 'admin' && user.role !== 'superadmin') {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <AdminLayout />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <p>Welcome to the admin dashboard!</p>
        {user.role === 'superadmin' && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Super Admin Features</h2>
            {/* Add super admin specific features here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;