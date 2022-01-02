import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Chart from "chart.js/auto";
import dataRequestMainChart from "./dataRequestMainChart";
import chartConfigFunction from "./mainChartConfig";
import DataRequestPolygonIo from "./dataRequestPolygonIo";
import { useAppContext } from "../../../appContext";


export default function BoxSx(props) {
  let myChart;
  let value = useAppContext();


  //<-------- ChartJs Funktion, um den Chart zu erstellen -------->
  const InitialChartJsFunction = async (event) => {
    //Hie wird die Data angefordert. Da auf die Daten gewartet werden muss, ist hier eine await funktion.
    const { dataValueArray, dataKeyArray, metaData } = await DataRequestPolygonIo({weekdaySelection: props.weekdaySelection, searchContent: value.searchContent});

    //Hie wird die Config des Charts angefordert. Übergeben wird dabei die Werte der Response
    let { chartConfig } = chartConfigFunction(
      dataValueArray,
      dataKeyArray,
      metaData,
      props.weekdaySelection
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
  }, [props.weekdaySelection, value.searchContent]);

  return (
    <Box
      variant="Main-Chart"
      sx={{
        width: "100%",
        height: 400,
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
