import React from 'react';
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
import { useQuery } from 'react-query';

function LineGraph() {
  const { isLoading, data } = useQuery('linegraph', () =>
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
      .then((response) => response.json())
      .then((response) => {
        const ChartData = {
          labels: Object.keys(response.cases),
          datasets: [
            {
              label: 'Cases',
              data: Object.values(response.cases),
              fill: false,
              color: '#f5a11b',
              borderColor: '#f5a11b',
              tension: 0.2,
            },
          ],
        };
        return ChartData;
      })
  );
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return isLoading ? (
    <div className="flex justify-center items-center mt-6">
      <i className="fa fa-spinner fa-spin text-[24px]"></i>
    </div>
  ) : (
    <div className="bg-white rounded-xl mt-2 shadow-xl min-h-[300px]">
      <Line
        data={data as any}
        height={'400px'}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

export default LineGraph;
