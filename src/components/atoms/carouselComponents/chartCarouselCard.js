import * as React from 'react';
import { useEffect } from "react";
import useSWR from "swr";
import Chart from "chart.js/auto";
import cardChartConfigFunction from "./cardChartConfig";
import DataRequestPolygonIo from "../mainDashboardChart/dataRequestPolygonIo";

export default function BoxSx(props) {
  let myChart;
  let { tickerForCard } = props
  //Die ID des Canvas beginnt wie in den Tutorials mit MyChart.
  //Da jedes Canvas eine eigene Id benoetigt, wird hier MyChart mit der Index-Nr der Slide ergaenzt.
  const chartId = "mychart" + props.slideIndex;

  const { data: dataPolygon, error: errorPolygon } = useSWR(["api/dataRequestPolygonIo", ["week", tickerForCard]],
      DataRequestPolygonIo,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: true
      });
    //if (dataPolygon) {
      //Wenn eine der Cards sich aendert, validiert useSWR ob sich der Cache-Key-Argumente geaendert haben
      //Falls nicht, läuft die If-Schleife hier trozdem durch. useEffect wird aber nicht neu getriggert
      //Auch wird in diesem Szenario kein neuer API Call gemacht, da die Daten bereits ge-cached sind!
    //   console.log("SWR der Card-Componente fuer Ticker " + tickerForCard + " hat Daten da:");
    //   console.log(dataPolygon);
    // }
    // if (errorPolygon) {
    //   console.log("Error der Card-Componente");
    //   console.log(errorPolygon);
    // }


  useEffect(() => {
  //Wenn die Daten noch nicht da sind, beende useEffect ohne den Chart zu zerstören
  if (!dataPolygon) {
    // console.log("Es sind noch keine Daten vorhanden. useEffect returned nichts.");
    return;
  }
  //Wenn Daten da sind, erstelle den Chart
  // console.log("Jetzt wird ein neuer Chart gemacht!");
  const { dataValueArray, dataKeyArray, metaData } = dataPolygon;
  let { chartConfig } = cardChartConfigFunction(
    dataValueArray,
    dataKeyArray,
    metaData,
    chartId,
    props.slideIndex,
  );

  const ctx = document.getElementById(chartId);
  myChart = new Chart(ctx, chartConfig, []);
  // console.log(
  //   "hier ist der Chart undefiniert, da auf die response gewartet wird:" +
  //     myChart
  // );

  return () => {
    // console.log("Hier wird der aktuelle chart mit id " + chartId +  " zerstört: " + myChart);
    myChart.destroy();
  };
}, [dataPolygon]);

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
