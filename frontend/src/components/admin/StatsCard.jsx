const StatsCard = ({ icon: Icon, title, value }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-full sm:w-48">
      <Icon className="text-indigo-600 mb-2" size={28} />
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-xl md:text-2xl font-bold">{value}</p>
    </div>
  );
};


export default StatsCard;
