import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "US Population Over Time",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Year",
      },
    },
    y: {
      title: {
        display: true,
        text: "Population",
      },
      ticks: {
        callback: (value) => value.toLocaleString(),
      },
    },
  },
};

const Chart = () => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setChartData({
          labels: data.data.map((item) => item.Year),
          datasets: [
            {
              label: "US Population",
              data: data.data.map((item) => item.Population),
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return chartData ? (
    <ChartContainer>
      <Line options={options} data={chartData} />
    </ChartContainer>
  ) : (
    <div>Loading...</div>
  );
};

export default Chart;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px; // Adjust the height as needed
  max-width: 600px; // Adjust the max-width as needed
  margin-left: 5px; // Adjust the left margin as needed
  margin-right: auto; // Ensures the chart stays aligned to the left
`;
