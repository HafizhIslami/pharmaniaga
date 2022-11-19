import bill from "../assets/bill.png";
import statistic from "../assets/statistics.png";
import getCoin from "../assets/get-coin.png";
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
import ChartCard from "../components/ChartCard";
import MiniCard from "../components/MiniCard";
import MediumCard from "../components/MediumCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOpt, setChartOpt] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Des",
      ],
      datasets: [
        {
          label: "",
          data: [200, 120, 150, 145, 170, 155, 185, 135, 145, 150, 160, 220],
          borderColor: "black",
          backgroundColor: "#457AF6",
        },
      ],
    });
    setChartOpt({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Sales & Purchase",
        },
      },
    });
  });

  return (
    <>
      <div className="py-10">
        <div className="flex mb-10">
          <MiniCard text1={"Total Selling"} text2={"890"} text3={"+20.5%"} />
          <MiniCard text1={"Expired Inventory"} text2={"5"} text3={""} />
          <MiniCard text1={"Out of stock inventory"} text2={"12"} text3={""} />
        </div>
        <div className="flex mx-10">
          <div className="p-3 max-w-4xl w-3/4 bg-white shadow-lg rounded-lg border border-slate-200">
            <div className="px-5 pt-5">
              <div className="flex items-start">
                <div className="text-3xl font-bold text-slate-800 mr-2">
                  Sales & Purchase
                </div>
              </div>
            </div>
            <div className="max-w-4xl">
              <ChartCard dataChart={chartData} dataOpt={chartOpt} />
            </div>
          </div>
          <div className="flex">
            <div className="self-center space-y-10">
              <MediumCard
                text1={"Total Transaksi"}
                text2={"Rp. 80.000.000"}
                imgSource={statistic}
              />
              <MediumCard text1={"Sales"} text2={"289"} imgSource={bill} />
              <MediumCard
                text1={"Purchase"}
                text2={"289"}
                imgSource={getCoin}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
