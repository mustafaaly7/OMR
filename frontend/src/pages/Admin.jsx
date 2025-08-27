import { useEffect, useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import StatsCard from "../components/admin/StatsCard";
import UserList from "../components/admin/UserList";
import AddUserModal from "../components/admin/AddUserModal";
import { Users, CreditCard, Plus, Menu } from "lucide-react";
import axios from "axios";

const Admin = () => {
  const [sidebarState, setSidebarstate] = useState("users");
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [activeTab, setActiveTab] = useState("active");

  const devUrl = import.meta.env.VITE_DEV_URL;

  const fetchUsers = async () => {
  try {
    // map your UI tab to the API filter
    const filter =
      activeTab === "active"
        ? "active"
        : activeTab === "requested"
        ? "requested"
        : "all";

    const { data } = await axios.get(`${devUrl}admin/get-users`, {
      params: { filter }, // ← send the filter to the API
    });

    // API already returns only what you asked for
    const users = Array.isArray(data?.data) ? data.data : [];
    setUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    setUsers([]); // optional: clear on error
  }
};




  // Fetch users on mount
  useEffect(() => {
  fetchUsers();
  const fetchSubscriptions = async () => {
    const response = await axios.get(`${devUrl}admin/get-plans`);
    setSubscriptions(response?.data?.data || []);
  };
  fetchSubscriptions();
}, [activeTab]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
     <Sidebar
  activeTab={sidebarState}
  setActiveTab={setSidebarstate}  // ✅ CORRECT
  isOpen={sidebarOpen}
  onClose={() => setSidebarOpen(false)}
/>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Bar */}
        <header className="flex flex-wrap items-center justify-between gap-3 bg-white/70 backdrop-blur-lg px-4 sm:px-6 py-4 border-b border-gray-200 sticky top-0 z-20">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={28} />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
          </div>

          {/* Add New User Button */}
          <div className="w-full sm:w-auto">
            <button
              onClick={() => setShowModal(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-xl flex justify-center sm:justify-between items-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              <Plus size={18} /> <span>Add New User</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
       {/* Dashboard Content */}
<div className="p-4 sm:p-6 flex flex-col gap-6">
  {/* Stats Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <StatsCard icon={Users} title="Total Users" value={users.length} />
    {/* <StatsCard
      icon={CreditCard}
      title="Active Subscriptions"
      value={subscriptions.length}
    /> */}
  </div>

  {/* Tabbed Content */}
  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200 min-h-[400px]">
    {sidebarState === "users" ? (
      <>
        {/* Filter Tabs */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setActiveTab("active")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "active"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Active Users
          </button>

          <button
            onClick={() => setActiveTab("requested")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "requested"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Requested Users
          </button>
        </div>

        {/* User List */}
        <UserList users={users} />
      </>
    ) : (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
          Subscription Management
        </h3>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          This feature is coming soon...
        </p>
      </div>
    )}
  </div>
</div>

      </main>

      {/* Add User Modal */}
      {showModal && (
        <AddUserModal
          onClose={() => setShowModal(false)}
          fetchUsers={fetchUsers} // pass fetch function
        />
      )}
    </div>
  );
};

export default Admin;
