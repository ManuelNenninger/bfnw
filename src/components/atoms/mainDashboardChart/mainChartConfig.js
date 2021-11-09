import * as React from "react";
import Chart from "chart.js/auto";
import RelativeReturnCalc from "../../calc/relativeReturne";


export default function mainChartConfig(dataValueArray, dataKeyArray, metaData) {
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

  //PlugIn fuer die verticale Linie (cursor)
  const tooltipline = {
  id: "tooltipline",
  beforeDraw: (chart) => {
    //Wenn Du über einen Datenpoint bist oder diesen auswählst wird das -active array gesetzt, und die Hoover Daten gespeichert.
    //In diesem Moment gehst Du in die If schleife und setzt den Draw.
    if (chart.tooltip._active && chart.tooltip._active.length) {
      // console.log(chart);
      const ctx = chart.ctx;
      ctx.save();
      const activePoint = chart.tooltip._active[0];
      //console.log(activePoint);
      ctx.beginPath();
      //Geh zu dem x-Wert des ausgewählten Points und dem maximalen Y Wert des Charts
      ctx.moveTo(activePoint.element.x, chart.chartArea.top);
      //...und zeichne die Linie vom x-Wert des ausgewählten Points bis zum Bottom Y-Wert des Charts
      ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#AAAAAA";
      //Zeichne die Stroke
      ctx.stroke();
      //Zerstöre Sie danach, um neue Linien zu malen
      ctx.restore();
    }
  }
};

//PlugIn fuer den custom Legend. Hier werden die ausgewählten Datenpoints in das hTML Legend uebertragen.
const costumeLegend = {
    id: "costumeLegend",
    beforeDraw: (chart) => {
      const priceLabel = document.getElementById("legend_price");
      const legendLabel = document.getElementById("legend_label");
      const relativeReturnLabel = document.getElementById("relative_returne");

      //Initiales zuweisen des Costume Legend
      legendLabel.innerHTML = metaData["2. Symbol"];
      relativeReturnLabel.innerHTML = RelativeReturnCalc(dataValueArray.at(0),dataValueArray.at(-1));

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

      //Wenn Du über einen Datenpoint bist oder dieser aktiv wird das -active array gesetzt, und die Hoover Daten gespeichert.
      if (chart.tooltip._active && chart.tooltip._active.length) {

        //Wenn der derzeit aktive Datenpoint kleiner als der Anfangswert ist, wird
        //Der Chart red. Ansonsten Green
        if (chart.tooltip.dataPoints[0].raw >= dataValueArray[0]) {
          chart.data.datasets[0].borderColor = "#4DA889";
          chart.update();
          document.getElementById("relative_returne_Box").style.backgroundColor = "#4DA889";
        } else {
          chart.data.datasets[0].borderColor = "#B00020";
          chart.update();
          document.getElementById("relative_returne_Box").style.backgroundColor = "#B00020";
        }

        //Dem Price_Label wird hier der aktuelle Wert des Datenpoints zugewiesen.
        priceLabel.innerHTML = chart.tooltip.dataPoints[0].formattedValue;
        //Hier wird dem Label relative_Return der Wert zugewiesen. Davor allerdings berechnet.
        relativeReturnLabel.innerHTML = RelativeReturnCalc(dataValueArray[0], chart.tooltip.dataPoints[0].raw);
      } else {
        priceLabel.innerHTML = dataValueArray.at(-1);
        //console.log(dataValueArray.at(-1));
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
      plugins: [horizontalDottedLine, tooltipline, costumeLegend],
      options: {
        plugins: {
          legend: {
            display: !true,
          },
        },
        maintainAspectRatio: !true,
        //Hier definierst Du, ab wann eine Interaction mit einem Chart-Object gilt. https://www.chartjs.org/docs/latest/configuration/interactions.html
        //intersect: !true, damit nicht nur eine interaction gilt, wenn Du genau das Chartobject berührst.
        //Für Mode: https://www.chartjs.org/docs/latest/configuration/interactions.html#modes
        interaction: {
          mode: "index",
          intersect: !true
        },
        elements: {
          point: {
            radius: 0,
            hoverRadius: 10,
          },
        },
        //events ist nicht unbedingt notwendig. Nur falls du ein plugin mit einem listener hast
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        scales: {
          x: {
            grid: {
              display: !true
            },
            x: {
              grid: {
                display: !true
              },
              type: "time"
            },
            ticks: {
              //display: !true,
              autoSkip: true,
              //autoSkipPadding: 100,
              maxTicksLimit: 5,
              maxRotation: 0,
              padding: 1,
              callback: function (value, index, ticks) {
                //Bekomm den Wert des ticks via Scope & this
                //Mach daraus ein Datum, wovon DU wiederum die Uhrzeit bekommst
                const dateObjectOfTick = new Date(this.getLabelForValue(value));
                return dateObjectOfTick.getHours();
              }
            }
          },
          y: {
            grid: {}
          }
        },
      }
    }
  };
}
