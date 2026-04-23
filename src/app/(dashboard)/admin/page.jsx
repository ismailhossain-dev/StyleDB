export default function AdminPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Welcome to Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* কার্ড বা চার্ট এখানে দিন */}
        <div className="h-32 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          Total Sales
        </div>
        <div className="h-32 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          New Orders
        </div>
        <div className="h-32 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          Visitors
        </div>
      </div>
    </div>
  );
}
