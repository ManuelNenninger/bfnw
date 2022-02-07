import * as React from "react";
import CostumeTableContainer from "../atoms/performanceTable/tableContainer";
import ControleInput from "../atoms/performanceTable/controleInput";

export default function PerformanceTable(props) {
  const [kategorie, setKategorie] = React.useState(10);

  return (
    <>
      <ControleInput
        kategorie={kategorie}
        setKategorie={setKategorie}
       />
      <CostumeTableContainer
        kategorie={kategorie}
        setKategorie={setKategorie}/>
    </>
  );
}
