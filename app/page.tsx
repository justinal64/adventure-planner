export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Adventure Planner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Plan Your Meals</h2>
          <p className="text-gray-600">Create and organize your outdoor meal plans with our easy-to-use meal planning tool.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Discover Hikes</h2>
          <p className="text-gray-600">Get AI-powered hiking suggestions based on your location and preferences.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Gear Checklist</h2>
          <p className="text-gray-600">Never forget essential gear with our comprehensive backpacking checklist.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Survival Guide</h2>
          <p className="text-gray-600">Access crucial survival tips and techniques for outdoor adventures.</p>
        </div>
      </div>
    </div>
  );
}