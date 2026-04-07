import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "./Progress.css";

const { CanvasJSChart } = CanvasJSReact;

const Progress = () => {
  const options = {
    exportEnabled: false,
    animationEnabled: true,
    theme: "light2",
    backgroundColor: "white",

    height: 160, // 👈 Increased from 180 to 300 (makes chart bigger)
    title: { text: "Project Progress", fontColor: "#000", fontSize: 16 },

    data: [
      {
        type: "doughnut",
        radius: "160%", // 👈 Increase radius for bigger circle
        innerRadius: "50%", // 👈 Adjust inner hole size
        indexLabel: "{name} ({y})",
        indexLabelFontSize: 10, // 👈 Bigger labels
        dataPoints: [
          { name: "Pending", y: 3.7 },
          { name: "Completed", y: 20.1 },
          { name: "In Progress", y: 9.7 },
        ],
      },
    ],
  };

  return (
    <div className="Progress">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Progress;
