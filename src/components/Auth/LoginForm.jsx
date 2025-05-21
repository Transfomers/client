import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    console.log('Attempting login with credentials:', credentials); // Debugging

    try {
      await login(credentials);           // Call AuthContext login
      navigate('/dashboard');            // Navigate to dashboard if login succeeds
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);  // Backend error
      } else {
        setError('Network error. Please try again.');  // Fallback error
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg border border-green-600">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-600">ITC Santé Admin Login</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {error && (
          <div className="text-red-600 bg-yellow-400 p-3 rounded mb-4 text-center font-semibold">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
          <input
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full p-3 border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">Password</label>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
            className="w-full p-3 border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full font-bold py-3 rounded transition-colors ${
            loading
              ? 'bg-green-300 opacity-50 cursor-not-allowed'
              : 'bg-green-600 hover:bg-yellow-300 text-white'
          }`}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;





// import { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import api from '../../services/api';

// const LoginForm = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsLoading(true);

//     try {
//       // Call backend login endpoint
//       const response = await api.post('/auth/login', credentials);
      
//       // Store token and update auth context
//       login(response.data.token);
      
//       // Redirect to admin dashboard
//       navigate('/admin/dashboard');

//     } catch (err) {
//       setError(err.response?.data?.message || 'Invalid email or password');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Admin Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-lg font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             value={credentials.email}
//             onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
//             className="mt-4 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-lg font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             value={credentials.password}
//             onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
//             className="mt-4 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500"
//             required
//           />
//         </div>
        
//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
//         >
//           {isLoading ? 'Signing In...' : 'Sign In'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

