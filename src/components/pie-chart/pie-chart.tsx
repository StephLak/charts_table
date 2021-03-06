import React from "react";
import { Pie } from "react-chartjs-2";

type Props = {
  keys: any[];
  sumOfSales: any[];
};

const PieChart: React.FC<Props> = ({ keys, sumOfSales }) => {
  return (
    <Pie
      width={100}
      height={50}
      options={{ maintainAspectRatio: false }}
      data={{
        labels: keys,
        datasets: [
          {
            label: "Amount of Sales",
            data: sumOfSales,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: "white",
            borderWidth: 2,
          },
        ],
      }}
    />
  );
};

export default PieChart;
