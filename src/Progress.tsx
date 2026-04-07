import React from "react";
// @ts-ignore
import CanvasJSReact from "@canvasjs/react-charts";
import "./Progress.css";

const { CanvasJSChart } = CanvasJSReact;

const Progress: React.FC = () => {
  const options = {
    exportEnabled: false,
    animationEnabled: true,
    theme: "light2",
    backgroundColor: "white",

    height: 160,
    title: { text: "Project Progress", fontColor: "#000", fontSize: 16 },

    data: [
      {
        type: "doughnut",
        radius: "160%",
        innerRadius: "50%",
        indexLabel: "{name} ({y})",
        indexLabelFontSize: 10,
        dataPoints: [
          { name: "Pending", y: 3.7 },
          { name: "Completed", y: 20.1 },
          { name: "In Progress", y: 9.7 },
        ] as const,
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
