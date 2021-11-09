import * as React from 'react';
import { useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import Chart from "chart.js/auto";


export default function BoxSx(props) {

//Die ID des Canvas beginnt wie in den Tutorials mit MyChart.
//Da jedes Canvas eine eigene Id benoetigt, wird hier MyChart mit der Index-Nr der Slide ergaenzt.
const chartId = "mychart" + props.slideIndex;

  const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Apple'],
      datasets: [{
          label: '',
          data: [12, 19, 3, 5, 2, 3, 4],
          borderColor: "#3e95cd",
          fill: false,
          borderWidth: 2,
          borderJoinStyle: "round",
          tension: 0.1,
          pointRadius: 0,
      }]
  }

//Option fuer eine reine Line-Chart.
  const options = {
    //https://www.chartjs.org/docs/latest/configuration/responsive.html
      maintainAspectRatio: !true,
      scales: {
          y: {
              beginAtZero: true,
                grid:{
                  drawBorder: false,
                  color: "#FFFFFF",
                },
                ticks: {
                  display: false,
                }
          },
          x: {
              grid:{
                drawBorder: false,
                color: "#FFFFFF",
              },
              ticks: {
                display: false,
              },
          },

      },
      plugins: {
        legend: false
      }
  }

  useEffect(() => {
    const ctx = document.getElementById(chartId);

    const myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
  }, []);

    return function cleanup() {
      myChart.destroy();
    };
  });

  return (
    <>
      <canvas id={chartId} width="100%" height="100%" aria-label="Chart-for-carousel-Card" role="img"></canvas>
    </>
  );
}
