export default function GetPublisherDateDifference({ publisherDate }) {
    let diff =
      Math.floor(
        new Date().getTime() - new Date(publisherDate).getTime()
      ) / 1000;
    const secs_diff = diff % 60;
    diff = Math.floor(diff / 60);
    const mins_diff = diff % 60;
    diff = Math.floor(diff / 60);
    const hours_diff = diff % 60;
    diff = Math.floor(diff / 24);
    const day_diff = diff % 24;
    /*console.log(
      "Es sind " +
        secs_diff +
        " Sekunden, " +
        mins_diff +
        " Minuten und " +
        hours_diff +
        " Stunden vergangen sowie " +
        day_diff +
        " Tage"
    );*/

    if (day_diff / 10 > 0) {
      return (day_diff + "d");
    } else {
      if (hours_diff / 10 > 0) {
        return(hours_diff + "h");
      } else {
        return(mins_diff + "min");
      }
    }
  };
