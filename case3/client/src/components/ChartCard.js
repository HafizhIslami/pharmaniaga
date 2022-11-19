import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartCard({dataChart,dataOpt}) {
    return (
    <>
      <div>
        {/* <NavBar /> */}
        <Bar options={dataOpt} data={dataChart} />
      </div>
    </>
  );
}
