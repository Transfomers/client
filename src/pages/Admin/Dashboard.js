import DashboardLayout from '../../components/Admin/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-600">
          Welcome to the administration panel. Manage your content and users from here.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
