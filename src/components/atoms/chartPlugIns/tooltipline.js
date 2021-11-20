export default function tooltipline(chart){
  return(
    {
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
  }
  );
}
