import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddUserModal = ({ onClose, fetchUsers }) => {
  const [email, setEmail] = useState("");
  const [subscription, setSubscription] = useState("");
  const devUrl = import.meta.env.VITE_DEV_URL;

  const handleConfirm = async () => {
    if (!email ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(`${devUrl}admin/add-user`, {
        email,
        subscriptionPlan: subscription,
      });

      if (!response.data.err) {
        toast.success(response.data.message || "User added successfully!");
        fetchUsers(); // Refresh user list after adding
        onClose();
      } else {
        toast.error(response.data.message || "Failed to add user!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error, please try again");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 w-96 shadow-2xl relative animate-fadeIn">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Add New User
        </h3>

        <input
          type="email"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        {/* <select
          value={subscription}
          onChange={(e) => setSubscription(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
        >
          <option value="">Select Subscription</option>
          <option value="Basic">Basic</option>
          <option value="Pro">Pro</option>
          <option value="Enterprise">Enterprise</option>
        </select> */}

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:opacity-90"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
