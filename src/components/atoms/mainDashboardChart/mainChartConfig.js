import RelativeReturnCalc from "../../calc/relativeReturne";
import theme from '../../../../styles/theme';




export default function mainChartConfig(dataValueArray, dataKeyArray, metaData, weekdaySelection) {
  //Configuration für Labels auf der X-Achse. Abhaenig von weekdaySelection
  //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  const apiParametersSelection = {
    "intraday": { hour: '2-digit'},
    "week": { day: 'numeric', weekday: 'short',},
    "month": { month: 'short', day: 'numeric',},
    "max": { year: 'numeric', month: 'short',},
  };

  //<-------------- The linear Gradient initialisierung -------------->
  let canvas = document.getElementById("myChart");
  let ctx = canvas.getContext("2d");
  let gradient_positiveReturn = ctx.createLinearGradient(0, 0, 0, 400);
  gradient_positiveReturn.addColorStop(0, "rgba(107, 178, 151, 0.9)");
  gradient_positiveReturn.addColorStop(0.5, "rgba(107, 178, 151, 0.5)");
  gradient_positiveReturn.addColorStop(0.8, "rgba(107, 178, 151, 0.3)");
  gradient_positiveReturn.addColorStop(1, "rgba(107, 178, 151, 0)");
  let gradient_negativeReturn = ctx.createLinearGradient(0, 0, 0, 400);
  gradient_negativeReturn.addColorStop(0, "rgba(201, 24, 74, 0.6)");
  gradient_negativeReturn.addColorStop(0.5, "rgba(201, 24, 74, 0.4)");
  gradient_negativeReturn.addColorStop(0.8, "rgba(201, 24, 74, 0.3)");
  gradient_negativeReturn.addColorStop(1, "rgba(201, 24, 74, 0)");

  //<-------------- Plugin fuer die horizontal Dotted Line -------------->
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
      ctx.strokeStyle = theme.palette.borderColor.dark;
      //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
      ctx.setLineDash([10, 20]);
      ctx.strokeRect(left, y.getPixelForValue(dataValueArray[0]), width, 0);
      ctx.restore();
    }
  };
  //Unkommentiere das, falls fuer alle Charts gueltig
  //Chart.register(horizontalDottedLine);

  //<-------------- PlugIn fuer die verticale Linie (cursor) -------------- >
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
      ctx.strokeStyle = theme.palette.secondary.main;
      //Zeichne die Stroke
      ctx.stroke();
      //Zerstöre Sie danach, um neue Linien zu malen
      ctx.restore();
    }
  }
};

//<-------------- PlugIn fuer den custom Legend. Zuweisen der initialen Werte -------------->
const costumeLegendInitial = {
    id: "costumeLegend",
    afterInit: (chart) => {
      const priceLabel = document.getElementById("legend_price");
      const legendLabel = document.getElementById("legend_label");
      const relativeReturnLabel = document.getElementById("relative_returne");
      //Initiales zuweisen des Costume Legend
      legendLabel.innerHTML = metaData.companyName;
      relativeReturnLabel.innerHTML = RelativeReturnCalc(dataValueArray[0],dataValueArray[dataValueArray.length - 1]);

      //Setze fest, ob der initial chart green or red ist
      if (dataValueArray[0] >= dataValueArray[dataValueArray.length - 1]) {
        chart.data.datasets[0].borderColor = theme.palette.error.main;
        chart.data.datasets[0].backgroundColor = gradient_negativeReturn;
        chart.update();
        document.getElementById("relative_returne_Box").style.backgroundColor = theme.palette.error.main;
      } else {
        chart.data.datasets[0].borderColor = theme.palette.primary.dark;
        chart.data.datasets[0].backgroundColor = gradient_positiveReturn;
        chart.update();
        document.getElementById("relative_returne_Box").style.backgroundColor = theme.palette.primary.dark;
      }
    }};

//<-------------- PlugIn fuer den custom Legend. Hier werden die ausgewählten Datenpoints in das hTML Legend uebertragen -------------->
const costumeLegend = {
    id: "costumeLegend",
    beforeDraw: (chart) => {
      const priceLabel = document.getElementById("legend_price");
      const legendLabel = document.getElementById("legend_label");
      const relativeReturnLabel = document.getElementById("relative_returne");

      //Wenn Du über einen Datenpoint bist oder dieser aktiv wird das -active array gesetzt, und die Hoover Daten gespeichert.
      if (chart.tooltip._active && chart.tooltip._active.length) {
        //Wenn der derzeit aktive Datenpoint kleiner als der Anfangswert ist, wird
        //Der Chart red. Ansonsten Green
        if (chart.tooltip.dataPoints[0].raw >= dataValueArray[0]) {
          chart.data.datasets[0].borderColor = theme.palette.primary.dark;
          chart.data.datasets[0].backgroundColor = gradient_positiveReturn;
          chart.update();
          document.getElementById("relative_returne_Box").style.backgroundColor = theme.palette.primary.dark;
        } else {
          chart.data.datasets[0].borderColor = theme.palette.error.main;
          chart.data.datasets[0].backgroundColor = gradient_negativeReturn;
          chart.update();
          document.getElementById("relative_returne_Box").style.backgroundColor = theme.palette.error.main;
        }

        //Dem Price_Label wird hier der aktuelle Wert des Datenpoints zugewiesen.
        priceLabel.innerHTML = chart.tooltip.dataPoints[0].formattedValue;
        //Hier wird dem Label relative_Return der Wert zugewiesen. Davor allerdings berechnet.
        relativeReturnLabel.innerHTML = RelativeReturnCalc(dataValueArray[0], chart.tooltip.dataPoints[0].raw);
      }
      else {
        priceLabel.innerHTML = dataValueArray[dataValueArray.length - 1];
      }
    }
  };

//<------- Tooltip Configuratio ------->
  const tooltiptitel = (tooltipItems) => {
    const newLabel = new Date(parseInt(tooltipItems[0].label));
    return newLabel.toLocaleDateString("de-DE", apiParametersSelection[weekdaySelection]);
  };

  const LabelRelativeReturne = (tooltipItems) => {
    const relativeReturnForCurrentValue = RelativeReturnCalc(
      dataValueArray[0],
      tooltipItems.raw
    );
  return relativeReturnForCurrentValue + " %";
};

const LabelRelativeReturneColor = (tooltipItems) => {
  if (tooltipItems.raw >= dataValueArray[0]) {
    return theme.palette.primary.dark;
  } else {
    return theme.palette.error.main;
  }
};

const footerPrice = (tooltipItems) => {
  return tooltipItems[0].raw;
};


  return {
    chartConfig: {
      type: "line",
      data: {
        labels: dataKeyArray,
        datasets: [
          {
            fill: "start",
            backgroundColor: gradient_positiveReturn,
            //fill: {
            //  target: { value: dataValueArray[0] },
            //  above: "rgba(107, 178, 151, 0.3)", // Area will be red above the origin
            //  below: "rgba(201, 24, 74, 0.3)"
            //}, // And blue below the origin
            label: metaData["2. Symbol"],
            data: dataValueArray,
            borderColor: theme.palette.error.main,
            tension: 0.2,
            borderWidth: 2
          }
        ]
      },
      plugins: [horizontalDottedLine, tooltipline, costumeLegend, costumeLegendInitial],
      options: {
        plugins: {
          tooltip: {
            titleFont: {
              size: 20
            },
            footerFont: {
              size: 14
            },
            backgroundColor: theme.palette.borderColor.dark,
            displayColors: !true,
            callbacks: {
              title: tooltiptitel,
              label: LabelRelativeReturne,
              footer: footerPrice,
              labelTextColor: LabelRelativeReturneColor
            }
          },
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
              display: !true,
              borderWidth: 1,
              borderColor: theme.palette.borderColor.main
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
                return new Date(this.getLabelForValue(value)).toLocaleDateString("de-DE", apiParametersSelection[weekdaySelection]);
              }
            }
          },
          y: {
            grid: {
              borderWidth: 1,
              borderColor: theme.palette.borderColor.main,
            }
          }
        },
      }
    }
  };
}
