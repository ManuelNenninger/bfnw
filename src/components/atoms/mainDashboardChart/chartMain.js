import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Chart from "chart.js/auto";
import chartConfigFunction from "./mainChartConfig";
import DataRequestPolygonIo from "./dataRequestPolygonIo";
import { useAppContext } from "../../../appContext";
import useSWR from "swr";

export default function BoxSx(props) {
  let myChart;
  let { searchContent } = useAppContext();
  let { weekdaySelection } = props

  const { data: dataPolygon, error: errorPolygon } = useSWR(["api/dataRequestPolygonIo", [weekdaySelection,searchContent]],
      DataRequestPolygonIo, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: true
      });
    // if (dataPolygon) {
    //   console.log("SWR des MainChart hat Daten da:");
    //   console.log(dataPolygon);
    // }
    // if (errorPolygon) {
    //   console.log("Error bei MainChart SWR");
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
    let { chartConfig } = chartConfigFunction(
      dataValueArray,
      dataKeyArray,
      metaData,
      weekdaySelection
    );

    const ctx = document.getElementById("myChart");
    myChart = new Chart(ctx, chartConfig, []);
    // console.log(
    //   "hier ist der Chart undefiniert, da auf die response gewartet wird:" +
    //     myChart
    // );

    return () => {
      // console.log("Im triggert");
      // console.log("Hier wird der aktuelle chart zerstört: " + myChart);
      myChart.destroy();
    };
  }, [dataPolygon]);

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
      {errorPolygon && !dataPolygon ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : null}
    </Box>
  );
}
