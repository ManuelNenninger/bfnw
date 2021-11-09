import * as React from "react";
import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Chart from "chart.js/auto";
import dataRequestMainChart from "./dataRequestMainChart";
import chartConfigFunction from "./mainChartConfig";

export default function BoxSx() {
  let myChart;

  //<-------- ChartJs Funktion, um den Chart zu erstellen -------->
  const InitialChartJsFunction = async (event) => {
    //Hie wird die Data angefordert. Da auf die Daten gewartet werden muss, ist hier eine await funktion.
    const { dataValueArray, dataKeyArray, metaData } = await dataRequestMainChart();

    //Hie wird die Config des Charts angefordert. Übergeben wird dabei die Werte der Response
    let { chartConfig } = chartConfigFunction(
      dataValueArray,
      dataKeyArray,
      metaData
    );

    const ctx = document.getElementById("myChart");
    myChart = new Chart(ctx, chartConfig, []);
    // console.log(
    //   "Hier ist der aktuell erstellte chart, da die Response da ist: " + myChart
    // );
  };

  useEffect(() => {
    //Hier wird die open-Values der Asset gespeichert

    InitialChartJsFunction();
    // console.log("Jetzt wird ein neuer Chart gemacht!");
    // console.log(
    //   "hier ist der Chart undefiniert, da auf die response gewartet wird:" +
    //     myChart
    // );

    return () => {
      // console.log("Im triggert");
      // console.log("Hier wird der aktuelle chart zerstört: " + myChart);
      myChart.destroy();
    };
  });

  return (
    <Box
      variant="Main-Chart"
      sx={{
        width: "100%",
        height: 500,
        border: 1
      }}
    >
      <canvas
        id="myChart"
        width="100%"
        height="100%"
        aria-label="Hello ARIA World"
        role="img"
      ></canvas>
    </Box>
  );
}
