import { useEffect } from "react";
import "@/styles/App.css";
import { observer } from "mobx-react";

import * as echarts from "echarts";

function BarComponent() {
  useEffect(() => {
    const ele = document.getElementById("basic-bar");
    console.log("ele: ", ele);

    var myChart = echarts.init(ele);
    const option: echarts.EChartOption = {
      title: {
        text: "ECharts bar example",
      },
      xAxis: {
        type: "category",
        data: ["Mon111", "Tue222", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [1200, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };
    myChart.setOption(option);
  }, []);

  return (
    <>
      <div style={{ width: 500, height: 500 }} id="basic-bar"></div>
    </>
  );
}

export default observer(BarComponent);
