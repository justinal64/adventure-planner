export default function SurvivalTips() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Survival Tips</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-3">Basic Survival Rules</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Stay calm and assess your situation</li>
              <li>Find or create shelter from the elements</li>
              <li>Locate a water source</li>
              <li>Signal for help when possible</li>
            </ul>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-3">Water Safety</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Always purify water before drinking</li>
              <li>Boil water for at least 1 minute</li>
              <li>Use water purification tablets if available</li>
              <li>Collect morning dew if no water source is available</li>
            </ul>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-3">Fire Starting</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Keep matches in a waterproof container</li>
              <li>Carry multiple fire starting tools</li>
              <li>Collect dry tinder when available</li>
              <li>Create a fire pit away from flammable materials</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Navigation</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Always carry a compass and map</li>
              <li>Learn to navigate using the sun</li>
              <li>Mark your trail as you go</li>
              <li>Stay in place if completely lost</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}