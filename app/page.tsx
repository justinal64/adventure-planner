export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-12 text-center gradient-text">Welcome to Adventure Planner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Plan Your Meals</h2>
          <p className="text-gray-400">Create and organize your outdoor meal plans with our easy-to-use meal planning tool.</p>
        </div>
        <div className="glass-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Discover Hikes</h2>
          <p className="text-gray-400">Get AI-powered hiking suggestions based on your location and preferences.</p>
        </div>
        <div className="glass-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Gear Checklist</h2>
          <p className="text-gray-400">Never forget essential gear with our comprehensive backpacking checklist.</p>
        </div>
        <div className="glass-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Survival Guide</h2>
          <p className="text-gray-400">Access crucial survival tips and techniques for outdoor adventures.</p>
        </div>
      </div>
    </div>
  );
}