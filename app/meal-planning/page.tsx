import React from 'react';

export default function MealPlanning() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Meal Planning</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Meal</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="mealName" className="block text-sm font-medium text-gray-700">Meal Name</label>
              <input
                type="text"
                id="mealName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="Enter meal name"
              />
            </div>
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
              <textarea
                id="ingredients"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="Enter ingredients (one per line)"
              />
            </div>
            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions</label>
              <textarea
                id="instructions"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="Enter cooking instructions"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Add Meal
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Saved Meals</h2>
          <div className="space-y-4">
            {/* This will be populated with meals from the database later */}
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium">Example Meal</h3>
              <p className="text-gray-600 text-sm mt-2">This is a placeholder meal. Real meals will be loaded from the database.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}