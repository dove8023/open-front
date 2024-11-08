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
        text: "Referer of a Website",
        subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "60%",
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
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
