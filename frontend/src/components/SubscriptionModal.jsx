// src/components/SubscriptionModal.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const SubscriptionModal = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const devUrl = import.meta.env.VITE_DEV_URL;

  // close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const isValidEmail = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !isValidEmail(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${devUrl}user/subscribe`, { email });

      if (!res.data?.err) {
        toast.success(res.data?.message || "Thanks! We’ll be in touch soon.");
        onSuccess?.();
        setEmail("");
        onClose?.();
      } else {
        toast.error(res.data?.message || "Subscription failed.");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // close when clicking overlay
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-[92%] max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()} // prevent overlay close
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <h2 className="mb-1 text-center text-2xl font-bold text-gray-900">
              Subscribe
            </h2>
            <p className="mb-6 text-center text-sm text-gray-500">
              Enter your email and we’ll notify you with updates and access.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                required
              />

              <motion.button
                type="submit"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                disabled={loading}
                className={`w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 py-3 font-semibold text-white shadow-md transition ${
                  loading ? "cursor-not-allowed opacity-70" : "hover:shadow-lg"
                }`}
              >
                {loading ? "Submitting..." : "Subscribe"}
              </motion.button>
            </form>

            <p className="mt-3 text-center text-xs text-gray-400">
              By subscribing, you agree to receive product updates. You can unsubscribe anytime.
            </p>

            <button
              onClick={onClose}
              className="mt-4 block w-full text-center text-sm text-gray-500 transition hover:text-gray-700"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionModal;
