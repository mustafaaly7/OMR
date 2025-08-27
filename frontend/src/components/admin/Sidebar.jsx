import { Users, CreditCard, X } from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab, isOpen, onClose }) => {
  return (
    <aside
      className={`fixed md:static top-0 left-0 h-full w-64 bg-white/80 backdrop-blur-xl shadow-xl p-6 flex flex-col z-50 transform transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      {/* Mobile Close */}
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Admin Panel
        </h2>
        <button onClick={onClose}>
          <X size={24} className="text-gray-700" />
        </button>
      </div>

      {/* Tabs */}
      <button
        onClick={() => {
          setActiveTab("users");
          onClose();
        }}
        className={`p-3 mb-3 rounded-lg text-left font-medium flex items-center gap-2 transition-all ${
          activeTab === "users"
            ? "bg-indigo-100 text-indigo-700 shadow"
            : "hover:bg-gray-100 text-gray-700"
        }`}
      >
        <Users size={18} /> Users
      </button>

      {/* <button
        onClick={() => {
          setActiveTab("subscriptions");
          onClose();
        }}
        className={`p-3 rounded-lg text-left font-medium flex items-center gap-2 transition-all ${
          activeTab === "subscriptions"
            ? "bg-indigo-100 text-indigo-700 shadow"
            : "hover:bg-gray-100 text-gray-700"
        }`}
      >
        <CreditCard size={18} /> Subscriptions
      </button> */}
    </aside>
  );
};

export default Sidebar;
