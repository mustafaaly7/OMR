const SuccessPopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow">
      Subscription successful! You'll receive an email shortly.
      <button onClick={onClose} className="ml-4 underline">Close</button>
    </div>
  );
};

export default SuccessPopup;
