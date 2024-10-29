import React from "react";
import Button from "./components/Button/Button";

const App: React.FC = () =>
{
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-10">
        
        {/* Left Side - Input Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-10 text-center">Position Size Calculator</h1>
          <h2 className="text-xl font-bold mb-4">Account Currency</h2>
          <select className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300 text-gray-700">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>NGN</option>
          </select>

          <label className="block text-gray-700 font-bold mb-2">Account Balance</label>
          <input
            type="number"
            placeholder="0"
            className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300"
          />

          <label className="block text-gray-700 font-bold mb-2">Risk Percentage</label>
          <input
            type="number"
            placeholder="0"
            className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300"
          />

          <label className="block text-gray-700 font-bold mb-2">Entry Price</label>
          <input
            type="number"
            placeholder="0"
            className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300"
          />

          <label className="block text-gray-700 font-bold mb-2">SL Price</label>
          <input
            type="number"
            placeholder="0"
            className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300"
          />

          <label className="block text-gray-700 font-bold mb-2">TP Price</label>
          <input
            type="number"
            placeholder="0"
            className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300"
          />

          <h2 className="text-xl font-bold mb-4">Currency Pair</h2>
          <select className="w-full p-3 rounded-lg border-2 border-gray-300 text-gray-700">
            <option>EUR/USD</option>
            <option>USD/JPY</option>
            <option>GBP/USD</option>
          </select>
        </div>

        {/* Right Side - Results Section */}
        <div className="border-red-500 mt-5">
          <Button className="bg-green-500 text-white w-full py-4 text-xl font-semibold rounded-3xl">Calculate</Button>
        </div>

        <div className="flex-1 hidden">
          <h2 className="text-xl font-bold mb-4">Results</h2>
          <div className="text-gray-700 space-y-4">
            <div className="flex justify-between">
              <span>Amount at Risk</span>
              <span className="font-semibold"></span>
            </div>
            <div className="flex justify-between">
              <span>Number of pips at risk</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between">
              <span>Number of pips to target</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between">
              <span>Risk-to-Reward</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between">
              <span>Position Size (units)</span>
              <span className="font-semibold">0</span>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-center mt-6">Goodluck💙</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
