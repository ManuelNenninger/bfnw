
//Fuer das errechnen der relativen Rendite.
//outputCourse === Ausgabe Kurs
//currenCourse === aktueller Kurs
export default function relativeReturn(outputCourse, currenCourse) {
  return (Math.round((((currenCourse/outputCourse)-1)*100)*100)/100);
}
