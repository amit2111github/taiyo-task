import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import axios from 'axios';

function LineGraph() {
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';
    axios.get(url).then((response) => {
      const { data } = response;
      const ChartData = {
        labels: Object.keys(data.cases),
        datasets: [
          {
            label: 'Cases',
            data: Object.values(data.cases),
            fill: false,
            color: '#f5a11b',
            borderColor: '#f5a11b',
            tension: 0.2,
          },
        ],
      };
      setChartData(ChartData);
      setLoading(false);
    });

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);
  return loading ? (
    <div className="flex justify-center items-center mt-6">
      <i className="fa fa-spinner fa-spin text-[24px]"></i>
    </div>
  ) : (
    <div className="bg-white rounded-xl mt-2 shadow-xl min-h-[300px]">
      <Line
        data={chartData}
        height={'400px'}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

export default LineGraph;
