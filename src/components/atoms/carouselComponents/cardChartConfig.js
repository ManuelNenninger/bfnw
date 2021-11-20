import * as React from "react";
import Chart from "chart.js/auto";
import RelativeReturnCalc from "../../calc/relativeReturne";
import Tooltipline from "../chartPlugIns/tooltipline";

export default function cardChartConfig(dataValueArray, dataKeyArray, metaData) {
  //Dotted Line
  const horizontalDottedLine = {
    id: "horizontalDottedLine",
    beforeDatasetsDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { top, right, bottom, left, width, height },
        scales: { x, y }
      } = chart;
      ctx.save();

      //draw line
      ctx.strokeStyle = "#292727";
      //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
      ctx.setLineDash([10, 20]);
      ctx.strokeRect(left, y.getPixelForValue(dataValueArray[0]), width, 0);
      ctx.restore();
    }
  };
  //Unkommentiere das, falls fuer alle Charts gueltig
  //Chart.register(horizontalDottedLine);

  const relativeChardColor = {
      id: "relativeChardColor",
      beforeDraw: (chart) => {
        //Setze fest, ob der initial chart green or red ist
        if (dataValueArray[0] >= dataValueArray.at(-1)) {
          chart.data.datasets[0].borderColor = "#B00020";
          chart.update();
          document.getElementById("relative_returne_Box").style.backgroundColor = "#B00020";
        } else {
          chart.data.datasets[0].borderColor = "#4DA889";
          chart.update();
          document.getElementById("relative_returne_Box").style.backgroundColor = "#4DA889";
        }
      }
    };

  return {
    chartConfig: {
      type: "line",
      data: {
        labels: dataKeyArray,
        datasets: [
          {
            label: metaData["2. Symbol"],
            data: dataValueArray,
            borderColor: "#B00020",
            tension: 0.2,
            borderWidth: 2
          }
        ]
      },
      plugins: [horizontalDottedLine,relativeChardColor],
      options: {
        plugins: {
          legend: {
            display: !true,
          },
          //Hier kein Tooltip, wenn ueber Chart Point hover
          tooltip: {
            enabled: !true
          },
        },
        maintainAspectRatio: !true,
        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
          x: {
            grid: {
              display: !true,
              drawBorder: false,
              color: "#FFFFFF",
            },
            x: {
              grid: {
                display: !true
              },
              type: "time"
            },
            ticks: {
              display: false,
            },
          },
          y: {
            grid:{
              drawBorder: false,
              color: "#FFFFFF",
            },
            ticks: {
              display: false,
            },
          }
        },
      }
    }
  };
}
