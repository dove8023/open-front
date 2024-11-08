import { useEffect } from "react";
import "@/styles/App.css";
import { observer } from "mobx-react";

import * as echarts from "echarts";

function AccountPage() {
  useEffect(() => {
    const ele = document.getElementById("basic-bar");

    var myChart = echarts.init(ele);
    const option: echarts.EChartOption = {
      title: {
        text: "ECharts line example",
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line", // line, bar, scatter, pie, etc.
          smooth: false, // false
        },
      ],
    };
    myChart.setOption(option);
  }, []);

  return (
    <>
      <div style={{ width: 800, height: 500 }} id="basic-bar"></div>
    </>
  );
}

export default observer(AccountPage);
