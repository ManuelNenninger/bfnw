import * as React from "react";
import CostumeTableContainer from "../atoms/performanceTable/tableContainer";
import ControleInput from "../atoms/performanceTable/controleInput";

export default function PerformanceTable(props) {

  return (
    <>
      <ControleInput />
      <CostumeTableContainer/>
    </>
  );
}
