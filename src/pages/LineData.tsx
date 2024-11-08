import { useEffect } from "react";
import "@/styles/App.css";
import { observer } from "mobx-react";

import * as echarts from "echarts";
import request from "@/utils/request";

async function getLineData(): Promise<{
  xData: string[];
  value: number[];
}> {
  const result: any = await request({
    url: "/totals/restful",
    method: "GET",
  });

  return {
    xData: result.list.map((item: any) => item.date),
    value: result.list.map((item: any) => item.sale),
  };
}

function AccountPage() {
  useEffect(() => {
    const ele = document.getElementById("basic-bar");

    var myChart = echarts.init(ele);

    const option: any = {
      title: {
        text: "中国汽车销量",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: [],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [],
          type: "bar", // line, bar, scatter, pie, etc.
          smooth: true, // false
        },
      ],
    };

    getLineData().then((data: any) => {
      option.xAxis.data = data.xData;
      option.series[0].data = data.value;
      myChart.setOption(option);
    });
  }, []);

  return (
    <>
      <div style={{ width: 1100, height: 500 }} id="basic-bar"></div>
    </>
  );
}

export default observer(AccountPage);
