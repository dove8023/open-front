import { useEffect } from "react";
import "@/styles/App.css";
import { observer } from "mobx-react";
import * as echarts from "echarts";
type EChartsOption = echarts.EChartsOption;

var option: EChartsOption;

option = {
  series: [
    {
      type: "gauge",
      axisLine: {
        lineStyle: {
          width: 30,
          color: [
            [0.3, "#67e0e3"],
            [0.7, "#37a2da"],
            [1, "#fd666d"],
          ],
        },
      },
      pointer: {
        itemStyle: {
          color: "auto",
        },
      },
      axisTick: {
        distance: -30,
        length: 8,
        lineStyle: {
          color: "#fff",
          width: 2,
        },
      },
      splitLine: {
        distance: -30,
        length: 30,
        lineStyle: {
          color: "#fff",
          width: 4,
        },
      },
      axisLabel: {
        color: "inherit",
        distance: 40,
        fontSize: 20,
      },
      detail: {
        valueAnimation: true,
        formatter: "{value} km/h",
        color: "inherit",
      },
      data: [
        {
          value: 70,
        },
      ],
    },
  ],
};

function AccountPage() {
  useEffect(() => {
    const ele = document.getElementById("basic-bar");

    var myChart = echarts.init(ele);
    setInterval(function () {
      myChart.setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed(2),
              },
            ],
          },
        ],
      });
    }, 2000);

    option && myChart.setOption(option as any);
  }, []);

  return (
    <>
      <div style={{ width: 500, height: 500 }} id="basic-bar"></div>
    </>
  );
}

export default observer(AccountPage);
