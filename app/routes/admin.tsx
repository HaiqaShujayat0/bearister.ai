import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/admin/users">
              <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <h2 className="text-xl font-semibold mb-2">User Management</h2>
                <p className="text-gray-300">Manage user accounts and permissions</p>
              </div>
            </Link>
            
            <Link to="/admin/obi-chat">
              <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <h2 className="text-xl font-semibold mb-2">Obi Chat</h2>
                <p className="text-gray-300">Access the Obi chat interface</p>
              </div>
            </Link>
            
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Analytics</h2>
              <p className="text-gray-300">View system analytics and reports</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/admin-login">
              <Button variant="outline" className="mr-4">
                Admin Login
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghost">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
