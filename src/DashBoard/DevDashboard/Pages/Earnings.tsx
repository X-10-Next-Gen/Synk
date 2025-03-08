import { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Earnings = () => {
  // Earnings Data (Dynamic)
  const [earnings, setEarnings] = useState({
    total: 5320,
    pending: 1200,
    withdrawn: 4120,
  });

  // Sales Distribution for Pie Chart
  const toolSalesData = {
    labels: ["AI Image Enhancer", "Chatbot API", "Text-to-Speech Engine", "AI Voice Cloning"],
    datasets: [
      {
        label: "Tool Sales",
        data: [40, 25, 15, 20], // Sales percentage
        backgroundColor: ["#4CAF50", "#FFC107", "#FF5722", "#2196F3"],
      },
    ],
  };

  // Monthly Earnings Data for Bar Chart
  const monthlyEarningsData = {
    labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Monthly Earnings ($)",
        data: [800, 950, 1200, 1000, 1350, 1020], // Earnings per month
        backgroundColor: "#4CAF50",
      },
    ],
  };

  // Withdraw Function
  const withdrawFunds = () => {
    if (earnings.pending > 0) {
      setEarnings({
        total: earnings.total - earnings.pending,
        pending: 0,
        withdrawn: earnings.withdrawn + earnings.pending,
      });
      alert("Withdrawal successful! Funds transferred.");
    } else {
      alert("No pending funds to withdraw.");
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Earnings Overview</h1>
      <p className="text-gray-300 text-sm md:text-base mb-6">Track your AI tool earnings & withdraw funds.</p>

      {/* Earnings Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
          <h2 className="text-lg md:text-xl text-white">Total Earnings</h2>
          <p className="text-green-400 text-xl md:text-2xl font-bold">${earnings.total}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
          <h2 className="text-lg md:text-xl text-white">Pending Payout</h2>
          <p className="text-yellow-400 text-xl md:text-2xl font-bold">${earnings.pending}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
          <h2 className="text-lg md:text-xl text-white">Withdrawn</h2>
          <p className="text-blue-400 text-xl md:text-2xl font-bold">${earnings.withdrawn}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Bar Chart for Earnings Trends */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg md:text-xl text-white mb-3">Monthly Earnings</h2>
          <Bar data={monthlyEarningsData} />
        </div>

        {/* Pie Chart for Sales Distribution */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg md:text-xl text-white mb-3">Tool Sales Distribution</h2>
          <Pie data={toolSalesData} />
        </div>
      </div>

      {/* Withdraw Funds Button */}
      <div className="mt-6 flex justify-center sm:justify-start">
        <button
          onClick={withdrawFunds}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold w-full sm:w-auto"
        >
          Withdraw Funds
        </button>
      </div>
    </div>
  );
};

export default Earnings;
