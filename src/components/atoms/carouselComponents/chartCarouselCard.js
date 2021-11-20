import * as React from 'react';
import { useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import Chart from "chart.js/auto";
import dataRequestCardChart from "../mainDashboardChart/dataRequestMainChart";
import cardChartConfigFunction from "./cardChartConfig";


export default function BoxSx(props) {
  let myChart;
  //Die ID des Canvas beginnt wie in den Tutorials mit MyChart.
  //Da jedes Canvas eine eigene Id benoetigt, wird hier MyChart mit der Index-Nr der Slide ergaenzt.
  const chartId = "mychart" + props.slideIndex;


  //<-------- ChartJs Funktion, um den Chart zu erstellen -------->
  const InitialChartJsFunctionforCard = async (event) => {
    //Hie wird die Data angefordert. Da auf die Daten gewartet werden muss, ist hier eine await funktion.
    const { dataValueArray, dataKeyArray, metaData } = await dataRequestCardChart();
    //Hie wird die Config des Charts angefordert. Übergeben wird dabei die Werte der Response
    let { chartConfig } = cardChartConfigFunction(
      dataValueArray,
      dataKeyArray,
      metaData
    );
    const ctx = document.getElementById(chartId);
    myChart = new Chart(ctx, chartConfig, []);
    // console.log(
    //   "Hier ist der aktuell erstellte chart, da die Response da ist: " + myChart
    // );
  };

  useEffect(() => {
  InitialChartJsFunctionforCard();
  // console.log("Jetzt wird ein neuer Chart gemacht! für " + chartId);
  // console.log(
  //   "hier ist der Chart undefiniert, da auf die response gewartet wird:" +
  //     myChart
  // );
  return () => {
    // console.log("Hier wird der aktuelle chart mit id " + chartId +  " zerstört: " + myChart);
    myChart.destroy();
  };
}, []);

  return (
    <>
      <canvas id={chartId}
      width="100%"
      height="100%"
      aria-label="Hello ARIA World"
      role="img"></canvas>
    </>
  );
}
