import * as React from "react";
import Chart from "chart.js/auto";
import RelativeReturnCalc from "../../calc/relativeReturne";
import Tooltipline from "../chartPlugIns/tooltipline";
import theme from '../../../../styles/theme';


export default function cardChartConfig(dataValueArray, dataKeyArray, metaData, chartId, slideIndex) {

  //<-------------- The linear Gradient initialisierung -------------->
  let canvas = document.getElementById(chartId);
  let ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(0, 0, 0, 100);
  //<-------------- Dotted Line -------------->
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
        //<-------- Zuweisung der Werte an die Costume Legend der Card -------->
        const legendLabel = document.getElementById("Typography_SlideIndex_" + slideIndex + "_RowIndex_0");
        const relativeReturnLabel = document.getElementById("Typography_SlideIndex_" + slideIndex + "_RowIndex_1");
        const priceLabel = document.getElementById("Typography_SlideIndex_" + slideIndex + "_RowIndex_2");
        const relativeReturnIconArrowDropDownIcon = document.getElementById("Relative_Return_ArrowDropDownIcon_SlideIndex_" + slideIndex);
        const relativeReturnIconArrowDropUpIcon = document.getElementById("Relative_Return_ArrowDropUpIcon_SlideIndex_" +  slideIndex);


        legendLabel.innerHTML = metaData;
        relativeReturnLabel.innerHTML = RelativeReturnCalc(dataValueArray.at(0),dataValueArray.at(-1)) + "%";
        priceLabel.innerHTML = dataValueArray.at(-1);

        //<-------------- Setze fest, ob der initial chart green or red ist -------------->
        if (dataValueArray[0] >= dataValueArray.at(-1)) {
          chart.data.datasets[0].borderColor = theme.palette.error.main;
          chart.update();
          relativeReturnLabel.style.color = theme.palette.error.main;
          relativeReturnIconArrowDropUpIcon.style.display = "none";
          //Set area on ChartJs to gradient Color
          gradient.addColorStop(0, "rgba(201, 24, 74, 0.8)");
          gradient.addColorStop(0.5, "rgba(201, 24, 74, 0.3)");
          gradient.addColorStop(0.8, "rgba(201, 24, 74, 0.001)");
          gradient.addColorStop(1, "rgba(201, 24, 74, 0.00)");
        } else {
          chart.data.datasets[0].borderColor = theme.palette.primary.main;
          chart.update();
          relativeReturnLabel.style.color = theme.palette.primary.main;
          relativeReturnIconArrowDropDownIcon.style.display = "none";
          //Set area on ChartJs to gradient Color
          gradient.addColorStop(0, "rgba(107, 178, 151, 0.8)");
          gradient.addColorStop(0.5, "rgba(107, 178, 151, 0.3)");
          gradient.addColorStop(0.8, "rgba(107, 178, 151, 0.001)");
          gradient.addColorStop(1, "rgba(107, 178, 151, 0)");
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
            fill: true,
            backgroundColor: gradient,
            //fill: {
            //  target: { value: dataValueArray[0] },
            //  above: "rgba(107, 178, 151, 0.3)", // Area will be red above the origin
            //  below: "rgba(201, 24, 74, 0.3)"
            //}, // And blue below the origin
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
