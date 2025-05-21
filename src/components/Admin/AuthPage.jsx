import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';

const AuthPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate(user.role === 'user' ? '/blog' : '/admin/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ITC Santé Admin Portal
          </h1>
          <h2 className="text-xl text-gray-600">
            Sign in to manage your content
          </h2>
        </div>
        
        <LoginForm />
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Need help? Contact{' '}
            <a 
              href="mailto:support@itc-sante.com" 
              className="text-blue-600 hover:text-blue-500"
            >
              technical support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;