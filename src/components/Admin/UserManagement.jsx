import { useState, useEffect } from 'react';
import api from '../../services/api';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin'
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', formData);
      setShowForm(false);
      // Refresh user list
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {/* User List */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Admin Users</h3>
        {users.map(user => (
          <div key={user._id} className="flex justify-between items-center p-3 border-b">
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {user.role}
            </span>
          </div>
        ))}
      </div>

      {/* Create User Form */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green-600 text-white px-4 py-2 rounded-md mb-4"
      >
        {showForm ? 'Cancel' : 'Create New Admin'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border rounded"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 border rounded"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-2 border rounded"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <select
              className="w-full p-2 border rounded"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
            >
              Create User
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserManagement;