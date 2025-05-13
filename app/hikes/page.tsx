export default function Hikes() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Suggested Hikes</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Find Hikes Near You</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="Enter your location"
              />
            </div>
            <div>
              <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">Difficulty Level</label>
              <select
                id="difficulty"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Find Hikes
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Suggested Hikes</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium">Example Hike</h3>
              <p className="text-gray-600 text-sm mt-2">This is a placeholder hike. Real suggestions will be generated based on your location.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}