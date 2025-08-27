import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    {/* Toast Notifications */}
    <ToastContainer position="top-center" autoClose={3000} />
  </BrowserRouter>
);

export default App;
